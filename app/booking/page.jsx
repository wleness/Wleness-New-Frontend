"use client";
import { Suspense, useEffect, useState } from "react";
import ExpertsInfo from "@components/Experts/Scheduling/ExpertsInfo";
import SchedulingCalendar from "@components/Experts/Scheduling/SchedulingCalendar";
import SchedulingSlot from "@components/Experts/Scheduling/SchedulingSlot";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import {
  APPLY_BOOKING_COUPON,
  BOOKING_CREATE_ORDER,
  RAZORPAY_KEY,
  RECORD_BOOKING,
} from "@data/api";
import { loadScript } from "@utils";
import { SUCCESS } from "@data/urls";
import OrderDetails from "@components/Experts/Scheduling/OrderDetails";
import useToken from "@utils/useToken";
import getSession from "@utils/getSession";
import { getUserInfo } from "@utils/useEnquiryForm";

function BookingsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isLoggedIn, token } = useToken();
  const { userData } = getUserInfo();

  // Session details
  const session_name = searchParams.get("session");
  const session_id = searchParams.get("id");
  const session = getSession(session_id);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [day, setDay] = useState("");

  // Pricing Details
  const [pricing, setPricing] = useState({
    price: "",
    subtotal: false,
  });
  const [coupon, setCoupon] = useState({
    code: "",
    is_applied: false,
    message: "",
  });

  useEffect(() => {
    setPricing({
      price: session?.discount_price,
      subtotal: Math.floor(
        session?.discount_price + session?.discount_price * 0.09 * 2
      ),
    });
  }, [session]);

  const handleCoupon = (event) => {
    event.preventDefault();

    if (session_id != 1) {
      setCoupon({
        ...coupon,
        message: "Invalid Coupon",
      });
      return null;
    }

    const options = {
      headers: { Authorization: "Bearer " + token },
    };

    const data = {
      package_id: session_id,
      code: coupon.code,
    };

    axios
      .post(APPLY_BOOKING_COUPON, data, options)
      .then((res) => {
        if (res.data.status == "success") {
          console.log(res.data);
          setCoupon({
            ...coupon,
            is_applied: true,
            message: res.data.message,
          });
          setPricing({
            price: Math.floor(
              session?.discount_price - session?.discount_price * 0.5
            ),
            subtotal: Math.floor(
              session?.discount_price -
                session?.discount_price * 0.5 +
                (session?.discount_price - session?.discount_price * 0.5) *
                  0.09 *
                  2
            ),
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
        setCoupon({
          ...coupon,
          message: error.message,
        });
      });
  };

  const handleSubmit = () => {
    const options = {
      headers: { Authorization: "Bearer " + token },
    };

    const data = {
      package_id: session_id,
      price: pricing?.subtotal,
    };

    axios
      .post(BOOKING_CREATE_ORDER, data, options)
      .then((res) => {
        handleRazorpayScreen(res.data.data);
      })
      .catch((error) => console.error(error));
  };

  const handleRazorpayScreen = async (data) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Error loading payment gateway");
      return;
    }

    const options = {
      key: RAZORPAY_KEY,
      amount: data?.price,
      currency: "INR",
      name: "Wleness",
      description: "Test Transaction",
      image: "https://api.wleness.com/static/img/payment-favicon.svg",
      order_id: data?.order_id,
      handler: (response) => {
        const option_headers = {
          headers: { Authorization: "Bearer " + token },
        };
        // Store the data in the backend
        const order_data = {
          session_id: session_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          date: selectedDate,
          time: selectedSlot,
          day: day,
          price: data?.price / 100,
          discount_price: pricing?.price,
          total: pricing?.subtotal,
        };
        axios
          .post(RECORD_BOOKING, order_data, option_headers)
          .then((response) => {
            if (response.data.status == "success") {
              router.push(SUCCESS);
            }
          })
          .catch((error) => console.error(error));
      },
      prefill: {
        name: data.name,
        email: data.email,
        contact: data.phone,
      },
      notes: {
        address: "",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <main className="bg-primary-two pt-12">
      <div className="container mx-auto !px-0">
        <div
          className={`grid overflow-hidden xl:h-[550px] mx-auto transition-all bg-gray-900 rounded-lg *:border-x *:border-slate-700 *:p-6 ${
            selectedDate == "" || (selectedDate != "" && selectedSlot != "")
              ? "xl:grid-cols-[2fr_2.5fr] xl:w-[850px]"
              : "xl:grid-cols-[2fr_3fr_2fr]"
          }`}
        >
          <ExpertsInfo
            date={selectedDate}
            slot={selectedSlot}
            day={day}
            session={session_name}
          />
          {[selectedDate, selectedSlot].includes("") ? (
            <>
              <SchedulingCalendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                setDay={setDay}
              />
              {selectedDate && (
                <SchedulingSlot setSelectedSlot={setSelectedSlot} />
              )}
            </>
          ) : (
            <OrderDetails
              user={userData}
              isLoggedIn={isLoggedIn()}
              handleSubmit={handleSubmit}
              session={session}
              handleCoupon={handleCoupon}
              coupon={coupon}
              setCode={(e) => setCoupon({ ...coupon, code: e.target.value })}
              pricing={pricing}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default function MainBookingsPage() {
  return (
    <Suspense>
      <BookingsPage />
    </Suspense>
  );
}

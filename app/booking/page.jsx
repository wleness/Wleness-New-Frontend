"use client";
import { Suspense, useState } from "react";
import ExpertsInfo from "@components/Experts/Scheduling/ExpertsInfo";
import SchedulingCalendar from "@components/Experts/Scheduling/SchedulingCalendar";
import SchedulingForm from "@components/Experts/Scheduling/SchedulingForm";
import SchedulingSlot from "@components/Experts/Scheduling/SchedulingSlot";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { BOOKING_CREATE_ORDER, RAZORPAY_KEY, RECORD_BOOKING } from "@data/api";
import { loadScript } from "@utils";
import { SUCCESS } from "@data/urls";

function BookingsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const session = searchParams.get("session");
  const session_id = searchParams.get("id");
  const [userData, setUserData] = useState({
    full_name: "",
    email: "",
    phone: "",
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [day, setDay] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...userData,
      package_id: session_id,
    };

    axios
      .post(BOOKING_CREATE_ORDER, data)
      .then((res) => {
        handleRazorpayScreen(res.data.data);
        // setUserData({
        //   full_name: "",
        //   email: "",
        //   phone: "",
        // });
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
      amount: data.price,
      currency: "INR",
      name: "Wleness",
      description: "Test Transaction",
      image: "https://wleness.com/assets/logo-d0920f6f.png",
      order_id: data.order_id,
      handler: (response) => {
        // Store the data in the backend
        const order_data = {
          ...userData,
          session_id: session_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          date: selectedDate,
          time: selectedSlot,
          day: day,
        };
        axios
          .post(RECORD_BOOKING, order_data)
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
    <main className="bg-primary-two pt-20">
      <div className="container mx-auto !px-0">
        <div
          className={`grid overflow-hidden h-[450px] mx-auto transition-all bg-gray-900 rounded-lg *:border-x *:border-slate-700 *:p-6 ${
            selectedDate == "" || (selectedDate != "" && selectedSlot != "")
              ? "grid-cols-[2fr_3fr] xl:w-[750px] "
              : "grid-cols-[2fr_3fr_2fr]"
          }`}
        >
          <ExpertsInfo
            date={selectedDate}
            slot={selectedSlot}
            day={day}
            session={session}
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
            <SchedulingForm
              setUserData={setUserData}
              handleSubmit={handleSubmit}
              userData={userData}
              back={() => setSelectedSlot("")}
              loader={loader}
              setLoader={setLoader}
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

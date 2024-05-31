import { modes } from "@data/experts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function ExpertPricing({ slug, packages }) {
  // const [selectDuration, setSelectDuration] = useState(pricings[2]["time"]);
  const [setMode, setSelectMode] = useState(modes[0]["value"]);
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  const handleModes = (event) => {
    setSelectMode(event.target.id);
  };
  return (
    <section className="bg-primary-two">
      <div className="container mx-auto pb-10 lg:pt-6">
        <div className="lg:flex lg:items-center lg:gap-x-5">
          <div className="mb-4 lg:mb-0 lg:w-1/2">
            <div className="flex gap-x-2 lg:gap-x-5">
              {modes.map((value, i) => {
                return (
                  <label
                    key={i}
                    htmlFor={value.value}
                    className={
                      setMode == value.value
                        ? "block w-full cursor-pointer rounded-full bg-primary-one  px-2 py-2.5 text-center font-semibold lg:px-5"
                        : "block w-full cursor-pointer rounded-full border-2 border-primary-one px-2 py-2.5 text-center font-semibold text-primary-one lg:px-5"
                    }
                  >
                    <input
                      type="radio"
                      name="duration"
                      id={value.value}
                      checked={setMode == value.value}
                      onChange={handleModes}
                      className="hidden"
                    />
                    <span className="mr-1 lg:mr-2">
                      <FontAwesomeIcon
                        icon={value.icon}
                        className="text-xs lg:text-base"
                      />
                    </span>
                    <span className="text-sm lg:text-base">{value.text}</span>
                  </label>
                );
              })}
            </div>

            <div className=" pt-5">
              <label htmlFor="coupon">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  placeholder="Apply Coupon"
                  className="mb-3 block w-full rounded-xl border-2 text-white border-yellow-200 bg-transparent outline-none px-6 py-2.5"
                />
              </label>

              <p
                className={`mb-4 text-center font-semibold ${
                  successMessage.status == "success"
                    ? " text-green-500 "
                    : " text-red-500 "
                }`}
              >
                {successMessage.message}
              </p>
              <div className="text-center">
                <Link href={slug} className="btn-one inline-block">
                  Book an appointment now
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-slate-800 p-5 lg:w-1/2 lg:p-10">
            <h2 className="mb-4 text-xl font-bold text-white lg:text-2xl">
              Pricing Details
            </h2>
            <div className="text-slate-300">
              <h4 className="mb-2 flex justify-between font-semibold">
                <span>Introductory Session</span>
                <span>Rs. 599</span>
              </h4>
              {packages &&
                packages.map((value, i) => {
                  return (
                    <h4
                      key={i}
                      className="mb-2 flex justify-between font-semibold"
                    >
                      <span>{value.package}</span>
                      <span>Rs. {value.price}</span>
                    </h4>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

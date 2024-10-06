"use client";
import useEnquiryForm from "@utils/useEnquiryForm";
import SignupModal from "./SignupModal";

export default function JoinWebinar() {
  const { enquiryForm, toggleForm } = useEnquiryForm();
  return (
    <>
      <section className="py-16 bg-primary-one" id="webinar">
        <div className="flex flex-col justify-center items-center">
          <div className="lg:w-[600px] space-y-8  text-center">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Join Our Exclusive Webinar: Stress Management for Traders
            </h2>
            <div className="font-medium px-4">
              <p>
                <strong>Date & Time</strong>: October 18th, 4:00 PM - 5:30 PM
                (IST)
              </p>
              <p>
                <strong>Registration fee</strong>: ₹200 (Limited Time Offer.
                Original Price ₹2500)
              </p>
            </div>

            <div>
              <button
                onClick={toggleForm}
                className="signup-open bg-black text-white font-medium inline-block rounded-xl py-3 px-6 hover:scale-[1.03] transition-all"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Signup modal */}
      <SignupModal isOpen={enquiryForm} onClose={toggleForm} />
    </>
  );
}

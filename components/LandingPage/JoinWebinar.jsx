"use client";
import useEnquiryForm from "@utils/useEnquiryForm";
import SignupModal from "./SignupModal";
import Image from "next/image";
import { swatiGhoshalPortrait, WebinarGuest1, WebinarGuest2 } from "@public";

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
        <div className="container mt-10 xl:mt-20 text-center mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 xl:mb-10">
            Our Guest Speakers
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-5 xl:gap-10 justify-center">
            <div>
              <Image
                src={WebinarGuest1}
                alt="this is the alt text"
                className="w-56 h-56 object-cover rounded-full shadow-md"
              />
              <h5 className="font-bold text-xl">Swati Ghoshal</h5>
              <p className="text-sm font-medium">
                Psychologist & CBT Practitioner
              </p>
              <p className="text-sm font-medium">8+ years of experience</p>
              <p className="text-sm font-medium">Hindi, English & Bengali</p>
            </div>
            <div>
              <Image
                src={WebinarGuest2}
                alt="this is the alt text"
                className="w-56 h-56 object-cover rounded-full shadow-md"
              />
              <h5 className="font-bold text-xl">Shivani Narang</h5>
              <p className="text-sm font-medium">Mindfulness & Yoga Coach</p>
              <p className="text-sm font-medium">
                Certified in mindfulness and meditation
              </p>
              <p className="text-sm font-medium">Diploma in coaching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup modal */}
      <SignupModal isOpen={enquiryForm} onClose={toggleForm} />
    </>
  );
}

"use client";
import { LandingPageHeaderImage, PrimaryHeaderImage } from "@public";
import Image from "next/image";
import SignupModal from "./SignupModal";
import useEnquiryForm from "@utils/useEnquiryForm";

export default function Header() {
  const { enquiryForm, toggleForm } = useEnquiryForm();
  return (
    <>
      <header className="bg-black py-8 lg:py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-2 justify-between items-center">
          <div className="lg:order-2 flex flex-col lg:flex-row justify-center relative items-center">
            <div className="z-10 bg-primary-one w-72 h-72 lg:w-[28rem] lg:h-[28rem] rounded-full border-[1.2rem] border-slate-800"></div>
            <Image
              className="rounded-full z-10 lg:w-[32rem] lg:h-[32rem] absolute bottom-5"
              src={LandingPageHeaderImage}
              alt="main header image"
            />
            <div className="absolute lg:w-96 w-60 z-20 bg-slate-800 rounded-xl py-4 lg:py-5 px-6 shadow-2xl left-1/2 -translate-x-1/2 bottom-0">
              <div className="text-center">
                <p>
                  <span className="text-slate-300"> In Just </span>
                  <span className="text-2xl lg:text-3xl font-bold text-primary-one">
                    200/-
                  </span>
                  <del className="font-medium text-slate-400"> 2500/-</del>
                </p>
                <p className="text-white text-sm lg:text-base text-nowrap">
                  Reserve your spot now
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[32rem] xl:order-1 flex flex-col gap-7">
            <h1 className="font-bold text-3xl lg:text-4xl text-white">
              Trade <span className="text-primary-one">Smarter </span> Stress
              Less Unlock Better
              <span className="text-primary-one"> Performance </span>
            </h1>

            <p className="lg:w-96 text-slate-300">
              Feeling overwhelmed by the pressures of trading? Learn practical
              techniques to manage stress and improve your decision-making.
            </p>
            <div className="flex gap-10">
              <button
                onClick={toggleForm}
                className="signup-open bg-primary-one font-medium inline-block rounded-xl py-3 px-6 hover:scale-[1.03] transition-all"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </header>
      <div>
        <Image
          src={PrimaryHeaderImage}
          alt="hero elements image"
          className="w-full object-cover"
        />
      </div>

      {/* Signup modal */}
      <SignupModal isOpen={enquiryForm} onClose={toggleForm} />
    </>
  );
}

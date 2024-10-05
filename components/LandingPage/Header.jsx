"use client";
import { LandingPageHeaderImage, PrimaryHeaderImage } from "@public";
import Image from "next/image";
import SignupModal from "./SignupModal";
import useEnquiryForm from "@utils/useEnquiryForm";

export default function Header() {
  const { enquiryForm, toggleForm } = useEnquiryForm();
  return (
    <>
      <header className="bg-black py-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-[32rem] flex flex-col gap-7">
            <h1 className="font-bold text-4xl text-white">
              Trade <span className="text-primary-one">Smarter </span> Stress
              Less Unlock Better
              <span className="text-primary-one"> Performance </span>
            </h1>

            <p className="w-96 text-slate-300">
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
          <div className="mr-6 flex justify-center relative items-center">
            <div className="z-10 bg-primary-one w-[28rem] h-[28rem] rounded-full border-[1.2rem] border-slate-800"></div>
            <Image
              className="rounded-full z-10 w-[32rem] h-[32rem] absolute bottom-5"
              src={LandingPageHeaderImage}
              alt=""
            />
            <div className="absolute w-96 z-20 bg-slate-800 rounded-xl py-5 px-6 shadow-2xl right-10 bottom-0">
              <div className="text-center">
                <div className="pr-4">
                  <p>
                    <span className="text-slate-300"> In Just </span>
                    <span className="text-3xl font-bold text-primary-one">
                      200/-
                    </span>
                    <del className="font-medium text-slate-400">2500/-</del>
                  </p>
                  <p className="text-white text-nowrap">
                    Reserve your spot now
                  </p>
                </div>
              </div>
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

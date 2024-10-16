"use client";
import CampusAmbassadorForm from "@components/Forms/CampusAmbassadorForm";
import { campusAmbassadorTeam } from "@public";
import useEnquiryForm from "@utils/useEnquiryForm";
import Image from "next/image";
import React from "react";

export default function OurCampusProgram() {
  const { enquiryForm, toggleForm } = useEnquiryForm();

  return (
    <>
      <section className="pb-10 pt-4 bg-primary-two">
        <div className="container mx-auto ">
          {/* <h2 className="text-center text-2xl font-bold text-primary-300 lg:px-44 lg:text-4xl"> */}
          <h2 className="subheading text-center !text-xl text-primary-one lg:px-44 lg:!text-3xl">
            Welcome to our Health and Wellness Campus Ambassador Program!
          </h2>
          <p className="para my-7 text-center lg:my-8 lg:px-12">
            Are you passionate about promoting a peaceful & stress free
            lifestyle and inspiring others to prioritize their well-being? Join
            our dynamic team of Campus Ambassadors and become a driving force
            for positive change on your campus.
          </p>
          <div className="mb-6 text-center">
            <button className="btn-one" onClick={toggleForm}>
              Join Us Now
            </button>
          </div>
          <div>
            <figure className="lg:flex lg:gap-x-5 lg:py-12">
              <div className="pb-8 lg:order-2 lg:w-2/5 lg:pb-0">
                <Image
                  src={campusAmbassadorTeam}
                  alt="Join Us Now"
                  className="mx-auto block w-fit object-cover"
                />
              </div>
              <figcaption className="self-center lg:order-1 lg:w-3/5">
                <div className="mr-10 rounded-2xl border-2 border-primary-one px-6 py-3 text-sm md:text-base lg:mr-20">
                  <p className="font-medium text-slate-300">
                    As an ambassador, you will have the opportunity to engage
                    with fellow students, organize exciting health-focused
                    events, share valuable wellness tips, and contribute to a
                    thriving community dedicated to fostering physical, mental,
                    and emotional wellness.
                  </p>
                </div>
                <div className="-mt-2 ml-10 rounded-2xl rounded-br-[4rem] bg-primary-one px-6 py-3 text-sm shadow-lg md:text-base lg:ml-20">
                  <p className="font-medium">
                    By becoming a part of our Wellness Campus Ambassador
                    Program, you&apos;re not just joining a team - you&apos;re
                    joining a movement. Your passion for wellness will have a
                    ripple effect, touching the lives of your peers and creating
                    a lasting legacy of health consciousness.
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <CampusAmbassadorForm isOpen={enquiryForm} onClose={toggleForm} />
    </>
  );
}

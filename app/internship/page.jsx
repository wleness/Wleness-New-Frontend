"use client";
import { useState } from "react";
// Data
import {
  internshipHeader,
  internshipIcon1,
  internshipIcon2,
  internshipIcon3,
  internshipIcon4,
  internshipIcon5,
  internshipWhy,
  iconCommitment,
  iconFacilities,
  iconExperience,
} from "@public";
import Image from "next/image";
import Link from "next/link";
import InternshipBanner from "@components/JoinUs/Internship/InternshipBanner";
import { APPLY_INTERNSHIP_FORM_URL } from "@data/urls";
import HappyClient from "@components/Sliders/HappyClient";
import { internshipClients } from "@data/clients";
import { internshipFaqs } from "@data/faqs";
import FaqWithImage from "@components/Therapy/CoupleTherapy/FaqWithImage";
import InternshipApplyForm from "@components/Forms/InternshipApplyForm";
// Components

const wlenessWork = [
  {
    image: internshipIcon1,
    title: "Kill deadlines, not your mental health:",
    desc: "Flexible timings for your Flexible creativity",
  },
  {
    image: internshipIcon2,
    title: "The perfect work life balance:",
    desc: "We work as a family where your priority matters to us.",
  },
  {
    image: internshipIcon3,
    title: "We spread smiles, not stress:",
    desc: "Unleash an ideal state of mind sans anxiety or stress.",
  },
  {
    image: internshipIcon4,
    title: "Break mental health barriers:",
    desc: "Well-being rules with wit, passion, and positive vibes!",
  },
  {
    image: internshipIcon5,
    title: "Stigma free zone:",
    desc: "Conquer the stigma and spread love and compassion.",
  },
];

const whyWleness = [
  [
    iconExperience,
    "Whether you're looking to assist therapists, conduct research or support community outreach programs, enjoy customized, diverse learning opportunities.",
    "true",
  ],
  [
    iconCommitment,
    "Our supportive and collaborative environment ensures you'll receive quality guidance and mentorship from experienced professionals dedicated to your growth.",
    "false",
  ],
  [
    iconFacilities,
    "Experience holistic development by working in a multi-disciplinary team with a positive work-life balance. There's a place for you wherever you excel.",
    "false",
  ],
];

export default function Internship() {
  const [internshipModal, setInternshipModal] = useState(false);

  const openInternshipModal = () => {
    setInternshipModal(true);
  };

  const closeInternshipModal = () => {
    setInternshipModal(false);
  };

  return (
    <>
      <header className="py-6 bg-primary-two lg:py-16">
        <div className="container mx-auto flex flex-col items-center justify-center md:flex-row">
          {/* Image on the right */}
          <div className="md:w-1/2 lg:order-2 ">
            <Image src={internshipHeader} alt="header" className="w-full" />
          </div>
          {/* Text items on the left */}
          <div className="px-4 py-4 text-center md:w-1/2 md:text-left lg:order-1">
            <h1 className="subheading heading-primary text-white">
              Looking for an Internship
            </h1>
            <h3 className="text-3xl font-bold text-white">Want to join us ?</h3>
            <p className="para py-4 pb-6 text-slate-400">
              We seek passionate individuals willing to make a change and
              contribute to our noble cause. Are you someone who has the zest to
              combine your passion for mental health with real life? If yes,
              look no further! Join Wleness to embark on a rewarding journey
              promoting well-being and supporting individuals in need.
            </p>
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdgYCChXTeQK01bfFM0_xS5Lq6MDesEPNN_JGkeVkiEtDu5QA/viewform"
              className="btn-one"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </header>

      <InternshipBanner url={APPLY_INTERNSHIP_FORM_URL} new_page={true} />
      {/* ==== Why wleness ===== */}
      <section className="bg-slate-900 overflow-x-hidden pt-10 lg:pb-7 lg:pt-12">
        <div className="container mx-auto">
          <div>
            <hgroup className="items-center lg:text-center">
              <h1 className="text-center">
                <span className="subheading heading-primary">Why Wleness?</span>
              </h1>
            </hgroup>
          </div>
          <div className="flex flex-col justify-between lg:flex-row lg:items-center">
            <div className="box-border p-4 sm:mx-auto sm:w-4/5 lg:w-[45%] lg:p-10">
              <Image src={internshipWhy} alt="" />
            </div>
            <article className="mx-auto pb-10 sm:w-[580px] lg:w-[55%]">
              <div className="space-y-3 lg:ml-12">
                {whyWleness.map((value, i) => {
                  return (
                    <figure
                      key={i}
                      className={`flex cursor-pointer rounded-xl rounded-br-[5rem] border-2 border-yellow-200 p-4 shadow-md transition-all  hover:shadow-xl xs:flex-row lg:items-center lg:p-5 lg:py-3 xl:py-6 ${
                        value[2] == "true"
                          ? " border-transparent bg-yellow-300 text-black"
                          : " hover:border-transparent hover:bg-yellow-300 text-slate-400 hover:text-black"
                      }`}
                    >
                      <div className="mr-4 w-1/5 xs:w-1/5 xl:w-1/5">
                        <Image
                          src={value[0]}
                          alt={value[1]}
                          className="w-full object-cover"
                        />
                      </div>
                      <figcaption className="w-4/5 xs:w-4/5 xl:w-4/5">
                        <p className="text-xs font-semibold leading-4 xs:text-xs xs:leading-4 sm:text-base sm:leading-5 lg:pr-5 lg:text-sm lg:leading-4 xl:text-base xl:leading-5">
                          {value[1]}
                        </p>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Want to know what is like to work at WLENESS */}
      <section className="pb-8 bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-center">
            <span className="subheading heading-primary">
              Want to know what it&apos;s like to work at WLENESS
            </span>
          </h2>

          <div className="mt-4 grid grid-cols-2 items-center gap-2 lg:gap-4 xl:grid-cols-5">
            {wlenessWork.map((value, index) => {
              return (
                <div
                  key={index}
                  className={`h-full cursor-pointer rounded-xl border-2 border-slate-500 p-4 shadow-xl hover:border-transparent hover:bg-primary-one/20 ${
                    index === 4 ? "hidden-on-mobile" : ""
                  }`}
                >
                  <div>
                    <Image
                      src={value.image}
                      alt={value.title}
                      className="mx-auto h-24 w-24 object-contain pb-1 lg:h-40 lg:w-40"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-bold leading-5 text-primary-one lg:text-lg">
                      {value.title}
                    </h3>
                    <p className="text-xs font-semibold lg:text-base text-slate-400">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <HappyClient data={internshipClients} />
      <FaqWithImage data={internshipFaqs} />

      <InternshipApplyForm
        isOpen={internshipModal}
        onClose={closeInternshipModal}
      />
    </>
  );
}

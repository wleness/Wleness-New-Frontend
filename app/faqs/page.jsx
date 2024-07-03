"use client";
import Faq from "@components/Buttons/Faq";
import { faqs } from "@data/faqs";
import { bgDotsPattern, faq3 } from "@public";
import Image from "next/image";
import { useState } from "react";

export default function FAQsPage() {
  const [openFAQ, setOpenFAQ] = useState(-1); // Initialize with -1 to represent all FAQs as closed

  // Toggle Faq's
  const toggleFAQ = (index) => {
    if (index === openFAQ) {
      // If it's already open, close it
      setOpenFAQ(1); // Close all FAQs
    } else {
      // If it's closed or a different FAQ is open, open it
      setOpenFAQ(index);
    }
  };

  return (
    <>
      <header className="relative overflow-x-hidden overflow-y-clip bg-primary-two">
        <div className="container mx-auto">
          <h1 className="subheading mt-8 !grid text-center text-white">
            <span>
              <span>You&apos;ve got </span>
              <span className="heading-primary">questions</span>
              <span>?</span>
            </span>
            <span>
              <span>We&apos;ve got </span>
              <span className="heading-primary">answers </span>
              <span>!</span>
            </span>
          </h1>

          <div className="lg:mb-4">
            <Image src={faq3} alt="" className="mx-auto lg:w-[560px]" />
            <p className="text-center text-sm font-bold sm:text-base lg:px-44 lg:text-xl text-slate-400">
              Everything you need to know right here at Wleness. Ask questions
              and browse around for answers.
            </p>
          </div>
        </div>

        {/* Dots  */}
        <Image
          src={bgDotsPattern}
          alt=""
          className="absolute -right-10 top-0 -z-10 hidden w-64 lg:block"
        />
        <Image
          src={bgDotsPattern}
          alt=""
          className="absolute -left-20 bottom-32 -z-10 w-32 lg:w-64"
        />
      </header>

      <section className="bg-primary-two">
        <div className="container mx-auto pb-10">
          <div className="pt-10">
            <div className="space-y-4">
              {faqs.map((value, index) => {
                return (
                  <Faq
                    key={index}
                    question={value.question}
                    answer={value.answer}
                    isOpen={index === openFAQ}
                    toggleFAQ={() => toggleFAQ(index)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

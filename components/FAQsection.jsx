"use client";
import { useState } from "react";
import Faq from "./Buttons/Faq";
import { faqs } from "@data/faqs";

export default function FAQsection() {
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
  );
}
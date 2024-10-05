"use client";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const faqs = [
  {
    question: "What can I expect?",
    answer: "Practical stress management strategies you can apply immediately.",
  },
  {
    question: "Is it for beginners?",
    answer:
      "Yes! These techniques are helpful whether you're just starting or have been trading for years.",
  },
  {
    question: "Will it help in volatile markets?",
    answer: "Absolutely—these tools are designed for high-pressure situations.",
  },
  {
    question: "Is this for day traders only?",
    answer: "No, long-term investors can benefit too.",
  },
  {
    question: "When will I see results?",
    answer:
      "Many traders notice an immediate shift in their mindset and focus.",
  },
];

export default function FAQs() {
  const [active, setActive] = useState(null);

  const handleActive = (i) => {
    if (active === i) {
      setActive(null);
    } else {
      setActive(i);
    }
  };

  return (
    <section className="bg-black py-16 lg:py-28">
      <div className="container mx-auto grid xl:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <h2 className="font-bold text-5xl text-white mb-8">
            <p>Your Questions</p>
            <p>Answered</p>
          </h2>

          <button className="bg-primary-one font-medium rounded-xl py-3 px-6 hover:scale-[1.03] transition-all">
            Contact Support
          </button>
        </div>
        <div>
          <div className="footer-text space-y-4">
            {faqs.map((value, i) => {
              return (
                <div
                  key={i}
                  className="bg-slate-800  transition-all cursor-pointer shadow-slate-200 rounded-lg p-5 faqs"
                >
                  <h4
                    onClick={() => handleActive(i)}
                    className="font-dm-sans text-lg font-semibold items-center text-white hover:text-primary-one grid grid-cols-[4fr_1fr]"
                  >
                    <span>{value.question}</span>
                    <span className="text-right">
                      <FontAwesomeIcon
                        className="w-5"
                        icon={active == i ? faMinus : faPlus}
                      />
                    </span>
                  </h4>
                  {active == i && (
                    <p className="footer-text  mt-4 text-slate-300">
                      {value.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

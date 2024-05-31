import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { textColorize } from "@utils";
import Image from "next/image";
import { useState } from "react";

export default function Guide({ data }) {
  const [openFAQ, setOpenFAQ] = useState(0);
  // Toggle Faq's
  const toggleFAQ = (index) => {
    if (index !== openFAQ) {
      setOpenFAQ(index);
    }
  };
  return (
    <section className="pb-8 pt-12 bg-black lg:pb-0">
      <div className="px-4 py-4 text-center lg:px-0">
        <h2 className="subheading">{textColorize(data.title)}</h2>
      </div>

      <div className="container mx-auto py-2 lg:flex lg:py-10">
        <div className="mb-8 lg:order-2 lg:mb-0 lg:w-1/2">
          <Image
            src={data.image}
            alt="Wleness - Guiding Business And Leaders to Success"
            className="mx-auto block object-cover lg:w-4/5"
          />
        </div>
        <div className="space-y-4 lg:order-1 lg:w-1/2">
          {data.points.map((value, index) => {
            return (
              <div
                key={index}
                className={`cursor-pointer select-none rounded-lg p-4 shadow-lg lg:p-6 ${
                  openFAQ == index ? " bg-slate-800 " : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="flex w-full items-center justify-between text-lg font-bold text-primary-one">
                  <span>{value.question}</span>
                  <FontAwesomeIcon
                    icon={openFAQ == index ? faCaretUp : faCaretDown}
                  />
                </h3>
                <p
                  className={`text-slate-300 ${
                    openFAQ == index ? "block font-semibold" : "hidden "
                  }`}
                >
                  {value.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

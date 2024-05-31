import Faq from "@components/Buttons/Faq";
import { textColorize } from "@utils";
import { useState } from "react";
// Data

export default function FaqWithImage(props) {
  const [openFAQ, setOpenFAQ] = useState(0);

  // Toggle Faq's
  const toggleFAQ = (index) => {
    if (index !== openFAQ) {
      setOpenFAQ(index);
    }
  };
  return (
    <>
      <section className="bg-slate-950">
        <div className="bg-slate-900 px-4 py-4 text-center lg:px-0">
          <hgroup className="subheading mb-2 !flex !w-full flex-col justify-center lg:flex-row">
            <h2 className="lg:md:mr-3">{textColorize(props.data.heading1)}</h2>
            <h2>{textColorize(props.data.heading2)}</h2>
          </hgroup>
          <p className="para text-center">{props.data.desc}</p>
        </div>

        <div className="container mx-auto py-10">
          <div className="space-y-4">
            {props.data.qnas.map((value, index) => {
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
      </section>
    </>
  );
}

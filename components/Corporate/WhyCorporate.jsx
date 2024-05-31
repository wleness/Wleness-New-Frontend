import { prioritizeCorporate } from "@data/corporate";
import Image from "next/image";

export default function WhyCorporate({ toggleForm }) {
  return (
    <section className="pt-6 text-center lg:py-6 bg-black">
      <div className="container mx-auto">
        <h2 className="subheading mb-4 lg:mb-8 lg:px-24 text-white">
          <span>Why prioritize </span>
          <span className="text-primary-one">Corporate Well-being</span>
        </h2>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {prioritizeCorporate.map((value, i) => {
            return (
              <figure key={i}>
                <div className="mb-2 lg:mb-4">
                  <Image src={value.image} alt="" className="w-full" />
                </div>
                <figcaption>
                  <p className="px-2 text-xs font-semibold md:text-sm lg:text-base text-slate-300">
                    {value.desc.map((element, j) => {
                      return element.status ? (
                        <span className="text-primary-one" key={j}>
                          {element.text}
                        </span>
                      ) : (
                        <span key={j}>{element.text}</span>
                      );
                    })}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="py-5 text-center">
          <button className="btn-one" onClick={toggleForm}>
            Join Us Now
          </button>
        </div>
      </div>
    </section>
  );
}

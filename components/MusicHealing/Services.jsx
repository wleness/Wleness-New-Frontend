"use client";
import Image from "next/image";
import {
  musicalHealingChild,
  musicalHealingOld,
  musicalHealingYoung,
} from "@public";
import ActivityForm from "@components/Forms/ActivityForm";
import useEnquiryForm from "@utils/useEnquiryForm";

export default function Services({ data, name }) {
  const { enquiryForm, toggleForm } = useEnquiryForm();

  return (
    <>
      <section className="py-6 lg:py-9 bg-black">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="subheading text-primary-one">{data.title}</h1>
            <p className="font-semibold text-slate-300 lg:text-xl">
              {data.desc}
            </p>
          </div>

          <div className="flex justify-center gap-2 py-6 lg:gap-5 lg:py-10">
            {[musicalHealingChild, musicalHealingYoung, musicalHealingOld].map(
              (value, i) => (
                <Image
                  key={i}
                  src={value}
                  alt=""
                  className="w-24 object-cover lg:w-32"
                />
              )
            )}
          </div>

          {/* Healing Services */}
          <div className="grid gap-6 px-5 pb-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-0">
            {data.types.map((value, index) => {
              return (
                <figure key={index} className="mx-auto 2xl:w-80">
                  <div>
                    <Image
                      src={value.thumbnail}
                      alt={value.title}
                      loading="lazy"
                      className="block w-full object-cover"
                      width={320}
                      height={289}
                    />
                  </div>
                  <figcaption>
                    <h4 className="py-2 text-lg font-bold text-primary-one lg:text-xl">
                      {value.title}
                    </h4>
                    <p className="pb-2 text-sm font-semibold text-slate-300 lg:text-base">
                      {value.desc}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
          <div className="pt-5 text-center">
            <button className="btn-one" onClick={toggleForm}>
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      <ActivityForm purpose={name} isOpen={enquiryForm} onClose={toggleForm} />
    </>
  );
}

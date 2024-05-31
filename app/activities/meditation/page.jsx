"use client";
import Header from "@components/Activities/Header";
import InfoCard from "@components/Cards/InfoCard";
import EnquiryForm from "@components/Forms/EnquiryForm";
import { meditation } from "@data/activities";
import useEnquiryForm from "@utils/useEnquiryForm";

export default function page() {
  const { enquiryForm, toggleForm } = useEnquiryForm();

  return (
    <>
      <Header
        title={meditation.header.title}
        desc={meditation.header.desc}
        image={meditation.header.image}
        alt={meditation.header.alt}
        button={{ text: "Enquire Now", action: toggleForm }}
      />

      <section className="pb-10 bg-primary-two">
        <div className="container mx-auto">
          <div className="rounded-2xl py-4 pt-8 text-center lg:pb-4 lg:pt-10">
            <h2 className="subheading heading-primary">
              {meditation.activities.title}
            </h2>
            <p className="font-semibold lg:text-lg text-slate-300">
              {meditation.activities.desc}
            </p>
          </div>

          {/* Sadhnas */}
          <div className="grid gap-6 pb-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-0">
            {meditation.activities.types.map((value, i) => {
              return <InfoCard data={value} />;
            })}
          </div>

          <div className="py-4 text-center">
            <button onClick={toggleForm} className="btn-one">
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      <EnquiryForm
        purpose={meditation.name}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
    </>
  );
}

"use client";
import Header from "@components/Activities/Header";
import InfoCard from "@components/Cards/InfoCard";
import EnquiryForm from "@components/Forms/EnquiryForm";
import { sadhna } from "@data/activities";
import useEnquiryForm from "@utils/useEnquiryForm";

export default function Sadhnapage() {
  const { enquiryForm, toggleForm } = useEnquiryForm();

  return (
    <>
      <Header
        title={sadhna.header.title}
        desc={sadhna.header.desc}
        image={sadhna.header.image}
        alt={sadhna.header.alt}
        button={{ text: "Enquire Now", action: toggleForm }}
      />

      <section className="pb-10 bg-primary-two">
        <div className="container mx-auto">
          <div className="rounded-2xl py-4 pt-8 text-center lg:pb-4 lg:pt-10">
            <h2 className="subheading heading-primary">
              {sadhna.activities.title}
            </h2>
            <p className="font-semibold lg:text-lg text-slate-300">
              {sadhna.activities.desc}
            </p>
          </div>

          {/* Sadhnas */}
          <div className="grid gap-6 pb-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-0">
            {sadhna.activities.types.map((value, i) => {
              return <InfoCard key={i} data={value} />;
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
        purpose={sadhna.name}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
    </>
  );
}

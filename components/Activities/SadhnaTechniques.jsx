"use client";
import InfoCard from "@components/Cards/InfoCard";
import ActivityForm from "@components/Forms/ActivityForm";
import useEnquiryForm from "@utils/useEnquiryForm";

export default function SadhnaTechniques(props) {
  const { enquiryForm, toggleForm } = useEnquiryForm();

  return (
    <>
      <section className="pb-10 bg-primary-two">
        <div className="container mx-auto">
          <div className="rounded-2xl py-4 pt-8 text-center lg:pb-4 lg:pt-10">
            <h2 className="subheading heading-primary">{props.title}</h2>
            <p className="font-semibold lg:text-lg text-slate-300">
              {props.desc}
            </p>
          </div>

          {/* Sadhnas */}
          <div className="grid gap-6 pb-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-0">
            {props.types.map((value, i) => {
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

      <ActivityForm
        purpose={props.name}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
    </>
  );
}

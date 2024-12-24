"use client";
import ExpertProfileCard from "@components/Cards/ExpertProfileCard";
import getExperts from "@utils/getExperts";
import Image from "next/image";

const points = [
  {
    title: "Consult Best Psychologist Online",
    description:
      "Consult the best psychologists in India online. Our team of expert counsellors and psychotherapists is here to help you navigate life's challenges. Whether you're struggling with stress, anxiety, depression, or relationship issues, we're here to listen, understand, and provide personalized support.",
  },
  {
    title: "Certified & Experienced",
    description:
      "Connect with top psychiatrists from expert therapy through our Wleness Prime Service. Get expert psychiatric advice and treatment from the comfort of your home.",
  },
  {
    title: "Online Counsellors",
    description:
      "We believe in providing the best possible care. That's why we carefully match you with the most suitable psychologist or counsellor online for your specific needs.",
  },
];

export default function AllExpertsPage() {
  const { status, doctorDetails } = getExperts();

  if (!status) {
    return <div className="mb-5 text-center">Loading...</div>;
  }
  return (
    <>
      <section className="bg-slate-900 py-10">
        <div className="container mx-auto grid items-center lg:grid-cols-2 lg:gap-x-20">
          <div className="mb-8 grid grid-cols-3 gap-2 lg:mb-0 lg:gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, i) => {
              return (
                <figure
                  key={i}
                  className=" rounded-2xl border-4 border-primary-one bg-yellow-50"
                >
                  <Image
                    src={doctorDetails[value].image}
                    alt="specialist image"
                    width={300}
                    height={300}
                    className="aspect-square object-cover object-top"
                  />
                </figure>
              );
            })}
          </div>
          <div>
            <h1 className="subheading heading-primary mb-3 !capitalize">
              Top Psychologist in India
            </h1>
            <div>
              <div className="mb-6 space-y-6">
                {points.map((value, i) => {
                  return (
                    <div key={i}>
                      <h3 className="mb-2 text-xl font-bold text-white">
                        {value.title}
                      </h3>
                      <p className="font-semibold text-slate-400">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="text-lg font-bold text-yellow-100">
                We assign the best psychologist and counsellor as per your case.
                We Choose the best for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <header className="py-4 lg:pt-10 bg-black">
        <div className="container mx-auto">
          <h1 className="text-center lg:mb-6">
            <span className="subheading heading-primary text-white">
              Best psychologist in India - Wleness
            </span>
          </h1>
          <p className="text-gray-400 text-lg lg:text-xl text-center">Take the first step towards a happier, healthier you. Book your counselling psychologist today.</p>
        </div>
      </header>

      {/* Specialist Doctors */}
      <section className="bg-black">
        <div className="side-spacing grid-cols-[repeat(4, minmax(280, 1fr))] container mx-auto grid gap-5 p-4 sm:grid-cols-2 lg:pb-12 3xl:gap-6">
          {doctorDetails.map((value, i) => {
            return <ExpertProfileCard key={i} data={value} />;
          })}
        </div>
      </section>
    </>
  );
}

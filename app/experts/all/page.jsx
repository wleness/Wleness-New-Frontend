"use client";
import ExpertProfileCard from "@components/Cards/ExpertProfileCard";
import HappyClient from "@components/Sliders/HappyClient";
import { expertsClients } from "@data/clients";
import getExperts from "@utils/getExperts";
import Image from "next/image";

const points = [
  {
    title: "Consult Best Psychologist & Counsellor in India",
    description:
      "List of Top Psychologists in India. Best Psychotherapists, Counsellors, Mental Health Therapists in India. Consult the best psychologist in India now.",
  },
  {
    title: "Certified & Experienced",
    description:
      "Get the best online Therapy & Counseling Experience from the Verified Professionals. Best Psychologist, Counsellor, Therapist for your Mental Health.",
  },
  {
    title: "Best Psychiatrists in India",
    description:
      "Connect with top psychiatrist from AIIMS & NIMHANS online at your comfortable space on your convenient time. Get the best Psychiatric treatment possible online with Wleness Wellbeing.",
  },
];

export default function page() {
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
            <h1 className="subheading heading-primary mb-3">
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
              Meet Our Specialists
            </span>
          </h1>
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

      <div className="bg-slate-900">
        <div className="container mx-auto py-4 xl:py-8 text-center">
          <h2 className="subheading heading-primary">
            What Our Clients Say About Us
          </h2>
          <p className="text-center font-medium leading-5 xl:text-lg xl:leading-6 text-slate-400">
            Hear from our valued clients about their experience with us and the
            impact we&apos;ve made on their lives. Read their heartfelt
            testimonials and discover the quality of care and support we
            provide.
          </p>
        </div>
      </div>
      <HappyClient data={expertsClients} />
    </>
  );
}

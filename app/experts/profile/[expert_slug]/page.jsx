"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { EXPERTS_URI } from "@data/api";
import { bgDotsPattern, profileMask } from "@public";
import ExpertPricing from "@components/Experts/Profile/ExpertPricing";
import ExpertsStatistics from "@components/Experts/Profile/ExpertsStatistics";
import { ExpertSuggestion } from "@components/Experts/Profile/ExpertSuggestion";
import PricingCards from "@components/Cards/PricingCards";

export default function ExpertsProfilePage({ params }) {
  // return <>{params.expert_slug} page is here</>;
  const [profileDetails, setProfileDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(EXPERTS_URI + "/" + params.expert_slug)
      .then((response) => {
        // Handle the successful response
        setProfileDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
        setLoading(false);
      });
  });

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }
  return (
    <>
      <header className="relative bg-primary-two overflow-x-clip">
        <div className="container mx-auto pb-8 pt-4">
          <h1 className="text-center text-primary-one lg:pb-4">
            <span className="subheading">Appointment Booking</span>
          </h1>
          <figure className="mx-auto items-center justify-center gap-x-8 py-3 lg:flex lg:w-[590px] lg:py-6">
            <div className="relative mx-auto mb-4 h-40 w-40 lg:h-48 lg:w-48">
              <div className="experts-profile-bg h-full w-full rounded-full">
                <Image
                  src={profileDetails.image}
                  width={250}
                  height={250}
                  alt={profileDetails.name}
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </div>
              <Image
                src={profileMask}
                alt=""
                className="absolute left-1/2 top-0 -translate-x-[55%] scale-110 object-cover"
              />
            </div>
            <figcaption className="mx-auto text-center lg:w-1/2 lg:text-left">
              <h2 className="text-2xl font-bold lg:text-3xl text-primary-one">
                {profileDetails.name}
              </h2>
              <h6 className="text-xl font-semibold lg:text-2xl text-white">
                {profileDetails.experience}
              </h6>
              <div className="my-2 font-medium">
                <p>
                  <span className="mr-1 font-semibold text-primary-one">
                    Expertise:
                  </span>
                  <span className="text-slate-300">
                    {profileDetails.expertise}
                  </span>
                </p>
                <p>
                  <span className="mr-1 font-semibold text-primary-one">
                    Speaks:
                  </span>
                  <span className="text-slate-300">
                    {profileDetails.languages}
                  </span>
                </p>
              </div>
              <p className="text-xl font-bold text-primary-one">
                Starts at Rs. {profileDetails.price}
              </p>
            </figcaption>
          </figure>

          <div className="rounded-3xl border-2 border-primary-one text-slate-300 p-3 lg:p-6">
            <p className="text-center text-sm font-medium md:text-lg">
              {profileDetails.bio}
            </p>
          </div>
        </div>

        <Image
          src={bgDotsPattern}
          alt="background dot pattern"
          className="absolute -right-20 top-0 hidden w-32 lg:-right-20 lg:block lg:w-64"
        />
        <Image
          src={bgDotsPattern}
          alt="background dot pattern"
          className="absolute -left-20 top-20 w-32 lg:top-40 lg:w-72"
        />
      </header>
      <PricingCards />
      {/* <ExpertPricing
        slug={"/experts/booking/" + profileDetails.slug}
        packages={profileDetails.packages}
      /> */}
      <ExpertsStatistics
        rating={profileDetails.rating}
        recommend={profileDetails.recommend}
        ongoing={profileDetails.ongoing}
        last_booked={profileDetails.last_booked}
      />
      <ExpertSuggestion
        fortes={profileDetails.fortes}
        suggestions={profileDetails.suggestions}
      />
    </>
  );
}

// Data
import {
  campusAmbassadorHeader,
  doodle2,
  roleCampus,
  roleProgram,
  roleSMM,
  roleSpreadAwareness,
  whyToApply1,
  whyToApply2,
  whyToApply3,
  whyToApply4,
} from "@public";
import Image from "next/image";
import WhoCanJoinCampus from "@components/Cards/WhoCanJoinCampus";
import OurCampusProgram from "@components/Cards/OurCampusProgram";
import getCanonical from "@utils/getCanonical";
import { CAMPUS_AMBASSADOR } from "@data/urls";

const roles = [
  [roleSMM, "Social Media & Public Marketing"],
  [roleSpreadAwareness, "Spread Awareness About Wleness"],
  [roleCampus, "Develop an ecosystem around the campus"],
  [roleProgram, "Suggest ways to make better program"],
];

// Campus Ambassador page
export const whyToApplyCampus = [
  {
    title: "Learning",
    highlight: " Opportunities",
    image: whyToApply1,
  },
  {
    title: "Career",
    highlight: " Counseling",
    image: whyToApply2,
  },
  {
    title: "Goodies from",
    highlight: " Wleness",
    image: whyToApply3,
  },
  {
    title: "Certificate",
    highlight: " Leadership",
    image: whyToApply4,
  },
];

export const metadata = {
  title: "Join the Wleness Campus Team | Wleness",
  description:
    " Wleness Life Coaching program help you to achieve your goals and live a fulfilling life. Schedule a consultation today!",
  alternates: {
    canonical: getCanonical(CAMPUS_AMBASSADOR),
  },
};

export default function CampusAmbassadorPage() {
  return (
    <>
      <header className="relative overflow-y-auto overflow-x-hidden bg-black py-6 text-center">
        <div className="container mx-auto">
          <h1 className="subheading mb-4">
            <span className="heading-primary">Campus Ambassador</span>
          </h1>
          <Image
            src={campusAmbassadorHeader}
            alt="Campus Ambassador Header Image"
            className="w-full"
          />
        </div>
      </header>

      {/* Our Program */}
      <OurCampusProgram />

      {/* Why to Apply */}
      <section className="bg-primary-two">
        <div className="container mx-auto text-center">
          <h2 className="subheading text-white">
            <span>Why you should </span>
            <span className="heading-primary">Apply?</span>
          </h2>
          <div className="flex flex-wrap justify-between py-6">
            {whyToApplyCampus.map((value, i) => {
              return (
                <figure key={i}>
                  <div>
                    <Image src={value.image} alt="" className="w-40" />
                  </div>
                  <figcaption>
                    <h4 className="text-xl font-bold text-white">
                      <span className="block">{value.title}</span>
                      <span className="heading-primary block">
                        {value.highlight}
                      </span>
                    </h4>
                  </figcaption>
                </figure>
              );
            })}
          </div>
          <Image
            src={doodle2}
            alt=""
            className="absolute -bottom-40 right-0 w-32 -scale-100 opacity-25 lg:w-64"
          />
        </div>
      </section>

      {/* Roles */}
      <section className="relative py-10 bg-primary-two text-center">
        <h2 className="subheading mb-10 text-white">
          <span>Role and </span>
          <span className="heading-primary">Responsibility</span>
        </h2>
        <div className="container mx-auto grid grid-cols-2 gap-4 lg:gap-8 xl:grid-cols-4">
          {roles.map((value, index) => {
            return (
              <figure key={index} className="rounded-2xl bg-slate-900 p-5">
                <div>
                  <Image
                    src={value[0]}
                    alt={value[1]}
                    className="mx-auto h-32 w-32 object-contain"
                  />
                </div>
                <figcaption>
                  <h5 className="text-center text-sm font-semibold text-primary-one lg:text-lg">
                    {value[1]}
                  </h5>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* Who can join */}
      <WhoCanJoinCampus />
    </>
  );
}

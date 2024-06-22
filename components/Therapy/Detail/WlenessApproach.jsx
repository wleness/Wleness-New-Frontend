import {
  wlenessApproachIcon1,
  wlenessApproachIcon2,
  wlenessApproachIcon3,
} from "@public";
import { ALL_EXPERTS, COMMUNITY } from "@data/urls";
import ApproachCard from "@components/Cards/ApproachCard";

export default function WlenessApproach({ data }) {
  return (
    <section className="py-5 bg-gradient-to-b from-slate-900 to-black pt-5 xl:pt-20">
      <div className="container mx-auto text-center">
        <h2 className="subheading text-white">
          {data.title[0]}
          <span className="heading-primary"> {data.title[1]}</span>
        </h2>
        <p className="text-lg xl:text-xl font-medium text-slate-300">
          {data.desc}
        </p>

        <div className="my-6 grid gap-6 rounded-xl bg-black p-2 lg:my-10 md:grid-cols-3 lg:gap-6 lg:p-4">
          <ApproachCard
            data={{
              title: "Talk to a Therapist",
              desc: data.approaches[0],
              image: wlenessApproachIcon1,
              slug: ALL_EXPERTS,
            }}
          />
          <ApproachCard
            data={{
              title: "Consult a Psychiatrist",
              desc: data.approaches[1],
              image: wlenessApproachIcon2,
              slug: "",
            }}
          />
          <ApproachCard
            data={{
              title: "Join the community",
              desc: data.approaches[2],
              image: wlenessApproachIcon3,
              slug: COMMUNITY,
            }}
          />
        </div>
      </div>
    </section>
  );
}

import Header from "@components/Activities/Header";
import GamesCard from "@components/Cards/GamesCard";
import { brain_exercise } from "@data/activities";
import { BRAIN_EXERCISE } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Cognitive Exercises Online | Wleness",
  description:
    " Wleness Life Coaching program help you to achieve your goals and live a fulfilling life. Schedule a consultation today!",
  alternates: {
    canonical: getCanonical(BRAIN_EXERCISE),
  },
};

export default function page() {
  return (
    <>
      <Header
        title={brain_exercise.header.title}
        desc={brain_exercise.header.desc}
        image={brain_exercise.header.image}
        alt={brain_exercise.header.alt}
        button={false}
      />

      <section className="pb-6 bg-black">
        <div className="container mx-auto">
          <div className="py-5 text-center lg:py-14">
            <h2 className="subheading text-primary-one">
              {brain_exercise.activities.title}
            </h2>
            <p className="font-semibold lg:text-xl text-slate-300">
              {brain_exercise.activities.desc}
            </p>
          </div>

          <div className="space-y-10 pb-4">
            {brain_exercise.activities.types.map((value, index) => {
              return <GamesCard key={index} data={value} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

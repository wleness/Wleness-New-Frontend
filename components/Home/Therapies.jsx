import TherapyCard from "@components/Cards/TherapyCard";
import { therapies } from "@data/home";

export default function Therapies({ is_title, is_bg }) {
  return (
    <section className={is_bg && "bg-primary-two"}>
      <div className={`container mx-auto pt-8 lg:pt-12 ${is_bg && "lg:pb-12"}`}>
        {is_title && (
          <div className="text-center lg:mb-4">
            <h2 className="subheading">Our Therapies</h2>
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-6 lg:py-6 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-6">
          {therapies.slice(0, 8).map((value, index) => {
            return (
              <TherapyCard
                openAssessmentModal={() => resetBookNow()}
                key={index}
                data={value}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

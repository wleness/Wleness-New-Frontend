import TherapyCard from "@components/Cards/TherapyCard";
import { therapies } from "@data/home";

export default function Therapies({ is_title, is_bg, headingClasses, description, therapyCard }) {
  return (
    <section className={is_bg && "bg-primary-two"}>
      <div className={`container mx-auto pt-8 lg:pt-12 ${is_bg && "lg:pb-12"}`}>
        {is_title && (
          <div className="text-center lg:mb-4">
            <h2 className={`${headingClasses}`}>Our Therapies</h2>
          </div>
        )}
        {description && (
          <div className="text-center">
            <p className="text-gray-400 text-lg lg:text-xl">Wleness offers the best online counseling and therapy consultations in India and worldwide. Consult a psychologist online via chat, phone, or video call. Connect with the best psychologist, therapists, and mental health experts.</p>
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-6 lg:py-6 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-6">
          {therapies.slice(0, 8).map((value, index) => {
            return (
              <TherapyCard
                {...therapyCard}
                redirect={!therapyCard?.redirect ? value.slug : therapyCard?.redirect}
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

import { benefits_of_yoga } from "@public";
import { textColorize } from "@utils";
import Image from "next/image";

const benefits = [
  "Yoga promotes relaxation, reducing the impact of daily stressors.",
  "Regular practice enhances flexibility, helping in better overall body movement.",
  "Yoga encourages mindfulness, sharpening mental clarity and concentration.",
  "It boosts energy by improving circulation and promoting a sense of energy.",
  "Yoga poses strengthen core muscles, contributing to improved posture.",
  "The combination of breath control and movement helps regulate emotions.",
  "Yoga provides a holistic approach, benefiting both body and mind.",
];

function YogaBenefits() {
  return (
    <section className="bg-slate-900">
      <div className="pb-6 pt-2 text-center lg:pb-12">
        <h1 className="subheading !py-6 text-white">
          {textColorize([
            {
              color: false,
              text: "Benefits of ",
            },
            {
              color: true,
              text: "Yoga",
            },
          ])}
        </h1>
      </div>
      <div className="container mx-auto mb-4 xl:mb-0 pb-14">
        <Image
          src={benefits_of_yoga}
          alt="Benefits of yoga"
          width={1060}
          height={378}
          className="rounded-xl"
        />
      </div>
    </section>
  );
}

export default YogaBenefits;

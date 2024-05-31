import ExpertsCard from "@components/Cards/ExpertsCard";
import { bubbles } from "@public";
import Image from "next/image";
import Link from "next/link";

export default function WhyUs({
  expertsTherapy,
  expertsPsychiatrist,
  expertsCoupleTherapy,
}) {
  return (
    <section className="relative bg-primary-two overflow-x-hidden overflow-y-clip px-5 lg:!px-0 lg:pb-14">
      <div className="container mx-auto mb-16 rounded-t-2xl pt-10 text-center">
        <h1 className="subheading mb-2">
          <span className="text-white">Why</span>{" "}
          <span className="heading-primary !text-primary-one">Wleness</span>
        </h1>
        <p className="text-center font-semibold text-slate-300 lg:px-24">
          Discover the power of personalized mental health care with our
          dedicated team of experts committed to helping you achieve your goals
          and improve your well-being.
        </p>
      </div>

      {/* ========== Our Services ========== */}
      <div className="container mx-auto">
        <ExpertsCard data={expertsTherapy} />
        <figure className="mb-12 flex flex-col items-center lg:mb-2 lg:flex-row">
          <figcaption className="order-2 lg:order-1 lg:w-[55%]">
            <Link href={expertsPsychiatrist.slug}>
              <h2 className="subheading mb-3 text-primary-one">
                {expertsPsychiatrist.title}
              </h2>
            </Link>
            <p className="mb-8 text-slate-300 text-justify font-medium">
              {expertsPsychiatrist.desc}
            </p>
            <p className="text-right">
              <span className="btn-one cursor-not-allowed">Coming Soon</span>
            </p>
          </figcaption>
          <div className="order-1 mb-5 lg:order-2 lg:ml-14 lg:w-[45%]">
            <Link href={expertsPsychiatrist.slug}>
              <Image
                src={expertsPsychiatrist.image}
                alt="Therapy"
                className="w-[90%] object-cover"
              />
            </Link>
          </div>
        </figure>
        <ExpertsCard data={expertsCoupleTherapy} />
      </div>

      <Image src={bubbles} alt="" className="absolute -right-96 top-0 -z-10" />

      <Image
        src={bubbles}
        alt=""
        className="absolute -left-96 top-[520px] -z-10 -scale-x-100"
      />
    </section>
  );
}

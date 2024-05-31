import { executiveCoachingHeader } from "@public";
import Image from "next/image";

export default function Header({ toggleForm }) {
  return (
    <header className="relative overflow-x-clip bg-black pb-6 pt-12 xl:pb-10 xl:pt-16">
      <div className="container mx-auto xl:flex xl:items-center xl:gap-x-5">
        <div className="mb-5 flex justify-end xl:order-2 xl:mr-4 xl:w-1/2">
          <Image
            className="w-full"
            src={executiveCoachingHeader}
            alt="Wleness Executive Coaching"
            width={512}
            height={468}
          />
        </div>
        <div className="xl:order-1 xl:w-1/2">
          <hgroup className="mb-6 xl:mb-8">
            <h1 className="subheading text-white">
              <span>Wellness </span>
              <span className="heading-primary">Executive Coaching</span>
            </h1>
            <h2 className="text-2xl font-semibold text-slate-100">
              <span className="">Making Good Leaders Great </span>
            </h2>
          </hgroup>

          <ul className="text-center lg:text-left text-sm md:text-base">
            <li className="mb-6 rounded-2xl bg-slate-900 text-slate-300 p-3 font-semibold">
              In the dynamic realm of modern business, leaders face fierce
              competition, complexity, and constant change. Not all leaders have
              mastered the agility required. Enter Wleness Executive Coaching -
              your strategic partner.
            </li>
            <li className="mb-6 rounded-2xl bg-slate-900 text-slate-300 p-3 font-semibold">
              Our approach blends data-driven insights, business psychology, and
              cutting-edge tech to deliver a transformative experience. We don't
              just coach; we empower leaders to navigate change and confidently
              lead their organizations to success. At Wleness, we know the
              corporate world craves adaptable trailblazers.
            </li>
          </ul>

          <button className="btn-one" onClick={toggleForm}>
            Enquire Now
          </button>
        </div>
      </div>
    </header>
  );
}

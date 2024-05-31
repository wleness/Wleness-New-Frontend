import { corporateHeader } from "@public";
import Image from "next/image";

export default function Header({ toggleForm }) {
  return (
    <header className="relative overflow-x-clip bg-black py-8 lg:py-28">
      <div className="container mx-auto xl:flex xl:items-center">
        <div className="mx-auto pb-2 text-center lg:order-2 lg:w-1/2">
          <Image
            src={corporateHeader}
            alt="Wleness - Foster A Healthy and thriving work environment with Wleness"
            width={530}
            height={354}
            className="mb-2 w-full rounded-3xl"
          />
        </div>
        <div className="text-center lg:order-1 lg:w-1/2 lg:pr-7 lg:text-left">
          <h1 className="subheading mb-2 pt-3 lg:mb-6 text-white">
            <span>Foster a </span>
            <span className="text-primary-one">Healthy and thriving work </span>
            <span>environment with Wleness</span>
          </h1>
          <p className="mb-6 font-semibold lg:text-lg xl:text-xl text-slate-300">
            Create a Mental Health-Friendly Work Environment with Customized
            Solutions for Your Unique Workplace
          </p>

          <button onClick={toggleForm} className="btn-one">
            Enquiry now
          </button>
        </div>
      </div>
    </header>
  );
}

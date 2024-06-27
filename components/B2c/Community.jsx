import { EngineersBuild, EngineersMarketers, montserrat } from "@/public";
import Image from "next/image";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import Certifications from "@components/common/Certifications";

export default function Community() {
  const box_class = "mx-auto xl:w-[1280px] xl:px-[184px]";
  return (
    <section className="bg-primary-two">
      <div>
        <hgroup className={`grid ${box_class}`}>
          <PrimaryTitle text={"Engineers build. Marketers sell."} />
          <PrimaryTitle text={"Designers create. Operators run."} />
          <h4 className="font-semibold text-primary-one text-lg text-center">
            you&apos;re trained to do things that we obviously can&apos;t.
          </h4>
        </hgroup>

        {/* <div className="grid xl:grid-cols-3">
          <div className="bg-[#BF0000]"></div>
          <div>
            <div>
              <Image
                src={EngineersBuild}
                alt="community image"
                className="xl:w-full"
              />
            </div>
            <div className="space-y-2 mb-6 xl:mb-0">
              <h4
                className={`p-3 bg-primary-one  text-center text-lg  ${montserrat.className}`}
              >
                <span className="font-medium">we&apos;re </span>
                <span className="font-bold"> trained</span>
                <span className="font-medium"> to solve your </span> <br />
                <span className="font-bold"> emotional & mental states</span>
              </h4>
            </div>
          </div>
          <div className="bg-[#BF0000]"></div>
        </div> */}
        <div className="relative">
          <Image
            src={EngineersMarketers}
            className="mx-auto w-[90%]"
            alt="Engineers marketers"
          />

          <div className="space-y-2 mb-6 xl:mb-0 xl:absolute left-1/2 xl:-translate-x-1/2 bottom-[155px] xl:w-[620px]">
            <h4
              className={`p-3 bg-primary-one  text-center text-lg  ${montserrat.className}`}
            >
              <span className="font-medium">we&apos;re </span>
              <span className="font-bold"> trained</span>
              <span className="font-medium"> to solve your </span> <br />
              <span className="font-bold"> emotional & mental states</span>
            </h4>
          </div>
        </div>

        <div className={`p-4 ${box_class} xl:-translate-y-36`}>
          <div className="mb-4 xl:mb-6">
            <p className="text-white font-semibold xl:text-xl flex flex-col mb-4 items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="66"
                viewBox="0 0 29 66"
                fill="none"
              >
                <path
                  d="M14.5 -6.33815e-07L14.5 65M14.5 65C14.4233 58.0517 22.3254 44.1552 29 44.1552M14.5 65C14.5767 58.0517 6.6746 44.1552 -2.0791e-06 44.1552"
                  stroke="white"
                  strokeWidth={2}
                />
              </svg>
              <span> We&apos;re an exclusive community of</span>
            </p>
            <h2
              className={`text-3xl font-bold py-2 text-primary-one ${montserrat.className}`}
            >
              Therapists. Psychologists. Psychiatrists. Coaches.
            </h2>
          </div>
          <Certifications />
        </div>
      </div>
    </section>
  );
}

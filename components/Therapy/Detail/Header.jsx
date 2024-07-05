import { ALL_EXPERTS } from "@data/urls";
import { textColorize } from "@utils";
import Image from "next/image";
import Link from "next/link";

export default function DetailHeader({ data, openAssessmentModal }) {
  return (
    <header className="bg-black py-2 lg:py-6 2xl:pb-10 2xl:py-14">
      <div className="container mx-auto flex flex-col items-center lg:flex-row 2xl:justify-between">
        <div className="mb-6 lg:order-2 lg:mb-0 lg:w-1/2 2xl:flex 2xl:justify-end">
          {/* Desktop Image */}
          <Image
            src={data.image}
            alt={data.alt}
            className="w-full object-cover"
            width={530}
            height={485}
          />
        </div>
        <div className="mb-6 md:mb-6 lg:order-1 lg:mb-0 lg:w-1/2 lg:pr-16 xl:pl-4">
          <hgroup className="md:mb-3 xl:mb-5">
            <h1 className="subheading">{textColorize(data.title)}</h1>
          </hgroup>
          <div className="xl:pr-12">
            {data.desc.map((value, index) => {
              return (
                <p className="mb-6 font-semibold text-slate-300" key={index}>
                  {value}
                </p>
              );
            })}
          </div>
          <div className="text-center xl:text-left">
            <Link href={ALL_EXPERTS} className="btn-one inline-block !px-14">
              Talk to Therapist
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

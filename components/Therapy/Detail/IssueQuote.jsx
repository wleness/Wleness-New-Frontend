import { cloudWithDots, didYouKnow } from "@public";
import Image from "next/image";

export default function IssueQuote({ quote }) {
  return (
    <section className="relative overflow-x-hidden bg-black overflow-y-clip pb-14">
      <div className="relative px-10">
        <Image
          src={didYouKnow}
          alt=""
          width={128}
          height={139}
          className="mx-auto w-fit xl:w-32"
        />
        <div className="hover:bg-primary-one/30 group relative mx-auto rounded-xl border-4 border-primary-one p-6 lg:w-[640px] lg:p-12">
          <p className="text-center font-bold text-slate-300">{quote}</p>
        </div>
      </div>

      {/* Cloud */}
      <Image
        src={cloudWithDots}
        alt=""
        className="absolute -left-20 bottom-14 hidden w-44 lg:block xl:w-80"
        width={320}
        height={188}
      />
      <Image
        src={cloudWithDots}
        alt=""
        className="absolute -right-20 bottom-14 hidden w-44 lg:block xl:w-80"
        width={320}
        height={188}
      />
    </section>
  );
}

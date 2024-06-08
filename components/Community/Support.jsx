import CommunitySupportCard from "@components/Cards/CommunitySupportCard";
import { communitySupport } from "@data/community";
import Link from "next/link";

export default function Support() {
  return (
    <section className="pt-8 text-center bg-primary-two ">
      <div className="p-4">
        <h1 className="subheading text-white">
          <span>Uncover your special heaven of </span>
          <span className="heading-primary">support and belonging</span>
        </h1>
        <p className="text-base font-semibold lg:text-lg text-slate-300">
          Always remember sharing your struggles only makes you stronger.
        </p>
      </div>

      <div className="container mx-auto  grid gap-x-14 gap-y-8 py-12 xl:grid-cols-3">
        {communitySupport.map((value, index) => {
          return <CommunitySupportCard key={index} data={value} />;
        })}
      </div>

      <div className="pb-8 text-center">
        <Link
          href="https://community.wleness.com/"
          target="_blank"
          className="btn-one mx-auto block"
        >
          Participate Now
        </Link>
      </div>
    </section>
  );
}

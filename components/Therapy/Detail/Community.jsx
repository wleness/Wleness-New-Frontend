import { COMMUNITY } from "@data/urls";
import Link from "next/link";

export default function Community() {
  return (
    <section className="relative overflow-x-hidden overflow-y-clip bg-slate-900 pb-7 pt-4">
      <div className="container mx-auto text-center">
        <h1 className="subheading pt-5">
          <span className="heading-primary pb-1 text-4xl">
            Wleness Community
          </span>
        </h1>
        <p className="para pb-6 !text-xl">
          Join our community and discover a network of understanding hearts
          where support flows freely, and compassion knows no bounds. Here,
          you&apos;ll find comfort, encouragement, and a sense of belonging as
          we walk hand in hand through life&apos;s ups and downs
        </p>
        <Link href={COMMUNITY} className="btn-one mx-auto block w-fit">
          Join Now
        </Link>
      </div>
    </section>
  );
}

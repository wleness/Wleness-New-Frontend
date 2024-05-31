import { community, designRing } from "@public";
import Image from "next/image";
import Link from "next/link";

export default function Community() {
  return (
    <section className="relative overflow-x-clip py-6 xl:py-20">
      <div className="container mx-auto">
        <div className="relative flex flex-col justify-between lg:flex-row lg:items-center">
          <div className="relative mb-8 lg:order-2 lg:mb-0 lg:w-2/5">
            <div className="mx-auto w-64 lg:w-72">
              <Image
                src={community}
                alt="Join the community - Wleness"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>

            <Image
              src={designRing}
              alt="India's Most Diverse Holistic Platform"
              loading="lazy"
              className="absolute right-1/2 top-1/2 -z-10 -translate-y-1/2 translate-x-1/2 scale-125 object-cover xs:w-80 md:w-96 lg:w-[520px] lg:scale-150 xl:scale-125"
            />
          </div>
          <article className="mx-auto space-y-7 pb-4 lg:order-1 lg:w-3/5 lg:pb-10">
            <hgroup>
              <h1 className="subheading">
                Join Our
                <span className="heading-primary"> Community</span>
              </h1>
              <p className="para ml-1 text-lg"></p>
            </hgroup>
            <p className="ml-1 text-sm font-medium leading-6 lg:pr-28 lg:text-lg">
              At Wleness, the community is at the heart of our mission. We’re
              more than a platform; we're an active collection of individuals
              united by the effort of holistic well-being. Here, you'll find
              more than just a community.
            </p>
            <p className="ml-1 text-sm font-medium leading-6 lg:mb-8 lg:pr-28 lg:text-lg">
              You'll find a place where wellness wins and friendships grow. And
              the best part? You can be anonymous, as per your comfort. Join us
              and be part of a top community committed to holistic living.
            </p>
            <Link href="/community" className="btn-one inline-block">
              Join Us Now
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

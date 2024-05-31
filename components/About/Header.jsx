import { aboutusHeader } from "@public";

export default function Header() {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat brightness-90 lg:bg-top"
      style={{
        backgroundImage: `url(${aboutusHeader.src})`,
      }}
    >
      <div className="mx-auto flex flex-col  bg-black bg-opacity-20 py-16  lg:flex-row lg:py-32">
        <div className="absolute inset-0"></div>
        <div className="space-y-4 px-4 sm:w-full lg:order-1 lg:ml-56 lg:w-1/2 lg:space-y-6 lg:px-0 lg:pr-44">
          <h1 className="text-[42px] font-semibold text-white brightness-105">
            About <span className="heading-primary !text-white">Wleness</span>
          </h1>
          <p className="brightness-10 relative z-10 w-full text-base font-semibold text-white">
            At Wleness, we believe in nurturing the harmony of mind, body, and
            soul, guiding you on a transformative journey towards holistic
            well-being. Embrace a life of vitality, balance, and inner peace as
            you explore a diverse array of resources, practices, and expert
            insights curated to elevate every facet of your wellness.
          </p>
          <p className="relative z-10 w-full text-base font-semibold text-white">
            By leveraging technology, Wleness connects users with licensed
            mental health professionals via a secure online platform, making it
            easier for people to receive support from the comfort of their own
            homes.
          </p>
          <p className="relative z-10 w-full text-base font-semibold text-white">
            The organization aims to establish a comprehensive mental health
            ecosystem offering treatment and tailored care plans for a spectrum
            of mental health conditions, including but not limited to anxiety,
            depression, bipolar disorder, ADHD, OCD, schizophrenia, and
            addictions.
          </p>
        </div>
      </div>
    </header>
  );
}

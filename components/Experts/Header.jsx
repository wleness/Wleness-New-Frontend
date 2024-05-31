import { expertsHeader } from "@public";
import Image from "next/image";

export default function Header() {
  return (
    <header className="animate-fadeIn bg-primary-two">
      <div className="container mx-auto flex flex-col items-center rounded-3xl !px-5 py-2 lg:flex-row lg:py-6 2xl:justify-between 2xl:py-16">
        <div className="lg:order-2 lg:mb-0 xl:w-1/2 2xl:flex 2xl:justify-end">
          {/* Desktop Image */}
          <Image
            src={expertsHeader}
            alt="Wleness - Our Experts"
            className=" w-full object-cover"
          />
        </div>
        <div className="-m-5 mb-6 rounded-3xl p-5 text-center md:mb-6 lg:order-1 lg:m-0 lg:mb-0 lg:rounded-none lg:text-left xl:w-1/2 xl:pl-4">
          <div className="md:mb-3">
            <hgroup className="subheading mb-2 text-center lg:text-left">
              <h1 className="heading-primary !text-primary-one mr-2">
                Mental Health Matters
              </h1>
              <h2>
                <span className="text-white lg:block">Unlock your </span>
                <span className="heading-primary !text-primary-one">
                  well being{" "}
                </span>
                <span className="text-white">with </span>
                <span className="heading-primary !text-primary-one">
                  wleness
                </span>
              </h2>
            </hgroup>
          </div>
          <p className="para mb-4 lg:mb-8">
            At Wleness, we provide a holistic approach to unlocking your
            wellness. Our team of dedicated psychologists and therapists is here
            to offer personalized guidance and support tailored to your unique
            needs. Whether you're seeking to manage stress, overcome challenges,
            or enhance your overall mental health, we're committed to empowering
            you on your path to wellness. Together, we'll unlock the potential
            for a healthier and happier you.
          </p>
          <div className="space-y-3 lg:flex lg:space-x-3 lg:space-y-0">
            <button
              className="btn-one !w-full lg:!w-fit lg:px-6"
              onClick={() => resetBookNow()}
            >
              Make an appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

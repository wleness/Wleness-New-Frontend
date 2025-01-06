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
          Wleness the Best Online Mental Health Counseling
          </h1>
          <p className="brightness-10 relative z-10 w-full text-base font-semibold text-white">
            At Wleness, we believe in nurturing the harmony of mind, body, and
            soul, guiding you on a transformative journey towards holistic
            well-being. Embrace a life of vitality, balance, and inner peace as
            you explore a diverse array of resources, practices, and expert
            insights curated to elevate every facet of your wellness.
          </p>
          <p className="relative z-10 w-full text-base font-semibold text-white">
          Recognizing the effectiveness and convenience of online therapy, Wleness offers flexible therapy options to suit your preferences. Whether you prefer phone calls, video sessions, or messaging, you can consult a psychologist online in a way that feels most comfortable for you. Our platform is guided by veteran therapists, ensuring you receive the most feasible and effective treatments.
          </p>
          <p className="relative z-10 w-full text-base font-semibold text-white">
          If you&apos;sre looking for the best psychologist or the best counselor and want to consult a psychologist online, Wleness is here to help. Let us guide you towards resolving your challenges and embracing a brighter future.
          </p>
        </div>
      </div>
    </header>
  );
}

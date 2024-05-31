import AboutUsDropDown from "@components/Accordion/AboutUsDropDown";
import { about3 } from "@public";
import Image from "next/image";

export default function Journey() {
  return (
    <section className="bg-black">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="px-6 py-6 text-lg font-semibold text-primary-one sm:px-12 sm:py-10 sm:text-xl md:px-24 md:py-14 md:text-2xl lg:px-48">
          "At every stage of your mental health journey, Wleness stands by your
          side, committed to helping you not just feel better, but truly become
          better and remain better."
        </p>
        <h2 className="subheading mx-auto mb-2 text-white text-lg sm:mb-4 sm:text-xl md:text-4xl">
          <span className="heading-primary">Wleness's</span> way of crafting
          your journey
        </h2>
      </div>

      <div className="container  mx-auto flex flex-col items-center gap-4 pb-6 sm:flex-row">
        <div className="order-2 w-full sm:w-1/2 lg:w-1/2">
          <AboutUsDropDown />
        </div>
        <div className="order-1 mb-4 flex w-full items-center justify-center sm:w-1/2 lg:order-2">
          <Image
            src={about3}
            alt="Wleness's way of crafting your journey"
            className="w-2/3 lg:w-full"
          />
        </div>
      </div>
    </section>
  );
}

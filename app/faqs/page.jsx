import Image from "next/image";
import { bgDotsPattern, faq3 } from "@public";
import FAQsection from "@components/FAQsection";
import getCanonical from "@utils/getCanonical";
import { FAQ } from "@data/urls";

export const metadata = {
  title: "Frequantly Asked Question | Wleness",
  description:
    "Get answers to your questions about Wleness online therapy, life coaching, and mental health resources. Visit our comprehensive FAQ section today!",
  alternates: {
    canonical: getCanonical(FAQ),
  },
};

export default function FAQsPage() {
  return (
    <>
      <header className="relative overflow-x-hidden overflow-y-clip bg-primary-two">
        <div className="container mx-auto">
          <h1 className="subheading mt-8 !grid text-center text-white">
            <span>
              <span>You&apos;ve got </span>
              <span className="heading-primary">questions</span>
              <span>?</span>
            </span>
            <span>
              <span>We&apos;ve got </span>
              <span className="heading-primary">answers </span>
              <span>!</span>
            </span>
          </h1>

          <div className="lg:mb-4">
            <Image src={faq3} alt="" className="mx-auto lg:w-[560px]" />
            <p className="text-center text-sm font-bold sm:text-base lg:px-44 lg:text-xl text-slate-400">
              Everything you need to know right here at Wleness. Ask questions
              and browse around for answers.
            </p>
          </div>
        </div>

        {/* Dots  */}
        <Image
          src={bgDotsPattern}
          alt=""
          className="absolute -right-10 top-0 -z-10 hidden w-64 lg:block"
        />
        <Image
          src={bgDotsPattern}
          alt=""
          className="absolute -left-20 bottom-32 -z-10 w-32 lg:w-64"
        />
      </header>

      <FAQsection />
    </>
  );
}

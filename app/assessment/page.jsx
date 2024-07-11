import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { self_assessments } from "@data/self_assessment";

export const metadata = {
  title: "Get Wleness Mental Health Assessment | Wleness",
  description:
    "Gain valuable insights into your mental well-being with Wleness online mental health assessment. Confidential & personalized feedback. Take control of your mental health today! ",
};

export default function AssessmentPage() {
  return (
    <>
      <section className="bg-primary-two py-12">
        <div className="container mx-auto">
          <div className="mb-8 grid items-center justify-between md:mb-14 lg:grid-cols-3">
            <Link
              href="/"
              className="mb-4 flex items-center justify-self-start rounded-full bg-primary-one px-4 py-2 text-sm font-semibold md:mb-0 md:rounded-lg"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="text-lg md:mr-2" />
              <span className="hidden md:block">Back</span>
            </Link>

            <h2 className="text-center text-xl font-bold text-primary-one xl:text-2xl">
              What are you struggling with?
            </h2>

            <small></small>
          </div>

          <div className="mx-auto mb-6 grid grid-cols-2 justify-center gap-2 lg:grid-cols-4 xl:w-4/5 xl:gap-5">
            {self_assessments.map((value, i) => {
              return (
                <Link
                  href={"/assessment/" + value.slug}
                  key={i}
                  className="mx-auto inline-block w-full cursor-pointer rounded-lg border-2 border-slate-700 bg-slate-800 py-6 shadow-md shadow-yellow-200 transition-all hover:border-primary-one hover:shadow-lg"
                >
                  <Image
                    src={value.image}
                    alt="stress icon"
                    className="mx-auto mb-3 h-10 w-10 object-contain lg:h-16 lg:w-16"
                  />
                  <span className="block text-white text-center text-lg font-semibold">
                    {value.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

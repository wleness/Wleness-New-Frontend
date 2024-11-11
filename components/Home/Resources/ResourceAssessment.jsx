import Link from "next/link";
import Image from "next/image";

import { self_assessments } from "@data/self_assessment";

export default function ResourceAssessment() {
  return (
    <div className="mx-auto mb-6 grid grid-cols-2 justify-center gap-2 lg:grid-cols-4 xl:w-4/5 xl:gap-5">
      {self_assessments.map((value, i) => {
        return (
          <Link
            href={"/free_mental_health_counselling/" + value.slug}
            key={i}
            className="mx-auto inline-block w-full cursor-pointer rounded-lg border-2 bg-white py-6 shadow-xl shadow-gray-300 transition-all hover:border-primary-300 hover:shadow-lg"
          >
            <Image
              src={value.image}
              alt="stress icon"
              className="mx-auto mb-3 h-10 w-10 object-contain lg:h-16 lg:w-16"
            />
            <span className="block text-center text-lg font-semibold">
              {value.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

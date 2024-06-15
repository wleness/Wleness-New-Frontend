import Link from "next/link";
import Image from "next/image";
import { assessment1, assessment2 } from "@public";

export default function Welcome() {
  return (
    <div className="py-14">
      <h2 className="subheading mb-4 text-center">
        <span className="heading-primary">Welcome to Wleness</span>
      </h2>

      <div className="mx-auto w-[300px]">
        <div className=" text-center">
          <h4 className="mb-5 text-xl">
            <span className="font-semibold">Do you want help finding a</span>
            <Link
              href="/services/therapy"
              className="block text-xl font-bold text-primary-400"
            >
              Therapist?
            </Link>
          </h4>
          <button className="btn-primary">Find the Therapist</button>
        </div>
        <div className="my-8 flex items-center justify-center gap-3">
          <span className="h-1 w-40 bg-primary-100"></span>
          <span>OR</span>
          <span className="h-1 w-40 bg-primary-100"></span>
        </div>
        <div className=" text-center">
          <h4 className="mb-5 text-xl">
            <span className="mr-1 font-semibold">
              Do you want to browse all our
            </span>
            <Link
              href="/services/therapy"
              className="text-xl font-bold text-primary-400"
            >
              Therapist?
            </Link>
          </h4>
          <Link href="/experts/all" className="btn-primary block">
            Browse all Therapist
          </Link>
        </div>
      </div>
      {/* Images */}
      <Image
        src={assessment1}
        alt=""
        className="absolute left-20 top-32 w-32"
      />
      <Image
        src={assessment2}
        alt=""
        className="absolute bottom-40 right-20 w-32"
      />
    </div>
  );
}

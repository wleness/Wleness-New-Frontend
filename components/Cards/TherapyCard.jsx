import { PRICING } from "@data/urls";
import Image from "next/image";
import Link from "next/link";

export default function TherapyCard({data, redirect, buttonText, cb }) {
  return (
    <div
      className="mx-auto w-full p-2 pt-14 lg:w-full lg:pt-24"
      title={data.title}
    >
      <div className="flex h-full flex-col items-center justify-center bg-slate-900 py-4 md:py-6">
        <Link href={data.slug}>
          <Image
            loading="lazy"
            src={data.image}
            alt={`${data.title} Wleness Service`}
            className="mx-auto mb-2 block h-28 object-contain md:h-32 md:w-44 lg:h-20 lg:w-44 3xl:h-32 3xl:w-44"
            style={{ marginTop: "-50%", backgroundSize: "50%" }}
          />

          <h3 className="mb-4 py-2 text-white text-center  font-bold md:py-4 lg:text-2xl">
            {data.name}
          </h3>
        </Link>
        <Link
          href={redirect}
          className="btn-one !text-sm !font-bold transition-colors hover:shadow-md"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

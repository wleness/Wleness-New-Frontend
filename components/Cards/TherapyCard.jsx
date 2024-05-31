import Image from "next/image";
import Link from "next/link";

export default function TherapyCard(props) {
  return (
    <div
      className="mx-auto w-full p-2 pt-14 lg:w-full lg:pt-24"
      title={props.data.title}
    >
      <div className="flex h-full flex-col items-center justify-center bg-slate-900 py-4 md:py-6">
        <Link href={props.data.slug}>
          <Image
            loading="lazy"
            src={props.data.image}
            alt={`${props.data.title} Wleness Service`}
            className="mx-auto mb-2 block h-28 object-contain md:h-32 md:w-44 lg:h-20 lg:w-44 3xl:h-32 3xl:w-44"
            style={{ marginTop: "-50%", backgroundSize: "50%" }}
          />

          <h3 className="mb-4 py-2 text-white text-center  font-bold md:py-4 lg:text-2xl">
            {props.data.name}
          </h3>
        </Link>
        <button
          className="btn-one !text-sm !font-bold transition-colors hover:shadow-md"
          onClick={props.openAssessmentModal}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

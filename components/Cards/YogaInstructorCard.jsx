import Image from "next/image";
import Link from "next/link";

export default function YogaInstructorCard(props) {
  return (
    <div className="p-2 pt-24" title={props.data.name}>
      <div className="flex flex-col items-center justify-center rounded-xl bg-transparent border border-yellow-200 px-4 py-4 md:py-6">
        <div className="relative mb-12">
          <Link
            href={`/yoga/booking/${props.data.slug}`}
            className="absolute left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-24 md:-translate-y-28 lg:h-36 lg:w-36"
          >
            <Image
              loading="lazy"
              src={props.data.image}
              alt={`${props.data.name} - ${props.data.expertise}`}
              width={145}
              height={145}
              className="mx-auto mb-2 block h-full w-full rounded-full object-cover shadow-lg"
            />
          </Link>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 py-2 text-center text-primary-one font-bold  capitalize lg:text-2xl">
            {props.data.name}
          </h3>
          <ul>
            <li>
              <strong className="text-white">Expertise: </strong>
              <span className="font-medium text-slate-300">
                {props.data.expertise}
              </span>
            </li>
            <li>
              <strong className="text-white">Experience:</strong>
              <span className="font-medium text-slate-300">
                {" "}
                {props.data.experience}
              </span>
            </li>
          </ul>
        </div>
        <Link
          href={`/yoga/booking/${props.data.slug}`}
          className="btn-one bg-primary-one !text-sm !font-bold transition-colors hover:bg-transparent hover:bg-gradient-to-br hover:shadow-md"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

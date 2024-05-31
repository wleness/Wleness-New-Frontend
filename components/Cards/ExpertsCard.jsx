import Image from "next/image";
import Link from "next/link";

export default function ExpertsCard(props) {
  return (
    <figure className="mb-12 items-center lg:mb-2 lg:flex">
      <div className="mb-5 lg:mr-14 lg:w-[45%]">
        <Link href={props.data.slug}>
          <Image
            src={props.data.image}
            alt="Therapy"
            className="w-[90%] object-cover"
          />
        </Link>
      </div>
      <figcaption className="lg:w-[55%]">
        <Link href={props.data.slug}>
          <h2 className="subheading mb-3 text-primary-one">
            {props.data.title}
          </h2>
        </Link>
        <p className="mb-8 text-slate-300 text-justify font-medium">
          {props.data.desc}
        </p>
        <p className="text-right">
          <Link
            href={props.data.slug}
            // className="font-bold text-primary-400 underline underline-offset-4 transition-all hover:text-primary-500"
            className="btn-one"
          >
            Get Started
          </Link>
        </p>
      </figcaption>
    </figure>
  );
}

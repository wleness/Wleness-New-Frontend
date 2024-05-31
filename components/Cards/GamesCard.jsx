import Image from "next/image";
import Link from "next/link";

export default function GamesCard(props) {
  return (
    <figure className="gap-8 text-center md:flex md:gap-14">
      <div className={props.data.class[0] + " md:w-1/2"}>
        <Image
          src={props.data.thumbnail}
          alt={props.data.title}
          className="block w-full object-cover"
        />
      </div>
      <figcaption className={props.data.class[1] + " md:w-1/2 lg:text-left"}>
        <h2 className="py-2 text-xl font-bold text-primary-one lg:text-2xl 2xl:text-4xl">
          {props.data.title}
        </h2>
        <p className="mb-2 pb-2 text-sm font-medium md:text-lg text-slate-300">
          {props.data.desc}
        </p>
        <div>
          <Link
            className="btn-one !py-2.5 inline-block"
            href={props.data.buttonLink}
            target="_blank"
          >
            Play Now
          </Link>
        </div>
      </figcaption>
    </figure>
  );
}

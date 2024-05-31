import Image from "next/image";
import Link from "next/link";

export default function InfoCard(props) {
  return (
    <figure className="p-4">
      <div>
        <Image
          src={props.data.thumbnail}
          alt={props.data.title}
          className="block w-full object-cover"
        />
      </div>
      <figcaption>
        <h4 className="py-2 text-xl font-bold text-primary-one">
          {props.data.title}
        </h4>
        <p className="pb-2 text-sm font-semibold text-slate-300">
          {props.data.desc}
        </p>
        <div className="text-right">
          <Link className="font-bold  text-primary-one" href={props.data.slug}>
            Read More
          </Link>
        </div>
      </figcaption>
    </figure>
  );
}

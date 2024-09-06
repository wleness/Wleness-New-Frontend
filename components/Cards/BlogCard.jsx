import { BLOGS } from "@data/urls";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard(props) {
  let slug = `${BLOGS}/${props.data.slug}`;

  return (
    <figure className="flex h-full flex-col p-2">
      <Link href={slug}>
        <Image
          src={props.data.thumbnail_image}
          className="w-full rounded-xl"
          alt={props.data.title}
          width={320}
          height={220}
        />
      </Link>
      <figcaption className="flex h-full flex-col items-start justify-between">
        <div>
          <h1 className="my-2 text-lg font-bold capitalize text-white">
            <Link href={slug}>{props.data.title}</Link>
          </h1>
          <p className="text-sm font-medium md:text-base lg:text-lg text-slate-400">
            {props.data.desc.length > 130
              ? props.data.desc.substring(0, 130) + "..."
              : props.data.desc}
          </p>
        </div>
        <Link
          href={slug}
          className="mt-4 inline-block rounded-3xl bg-primary-one px-4 py-2 text-sm font-medium transition-all hover:bg-transparent md:text-base border-2 border-transparent hover:border-primary-one hover:text-primary-one"
        >
          Read more
        </Link>
      </figcaption>
    </figure>
  );
}

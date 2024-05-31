import Image from "next/image";
import Link from "next/link";

export default function ApproachCard(props) {
  return (
    <figure className="group relative z-20">
      <Link href={props.data.slug}>
        <div className="z-20 grid bg-slate-800 h-full cursor-pointer place-items-center rounded-xl border-2 border-slate-500 p-1 py-4 text-center text-xs font-semibold shadow-sm group-hover:rounded-none group-hover:text-primary-one lg:px-8 lg:text-lg 2xl:py-14 text-white">
          <Image src={props.data.image} alt="" className="mb-4 w-7 lg:w-fit" />
          <h4>{props.data.title}</h4>
          <p className="mt-2 text-sm text-slate-300">{props.data.desc}</p>
        </div>
      </Link>
    </figure>
  );
}

import Image from "next/image";

export default function CommunityCard(props) {
  return (
    <div className="grid cursor-pointer content-between rounded-2xl p-4 transition-all hover:bg-black  hover:shadow-md hover:shadow-primary-one focus:bg-none">
      <h2 className="text-center text-lg font-bold lg:text-xl text-white">
        {props.data.title}
      </h2>
      <Image
        src={props.data.image}
        alt=""
        className="mx-auto my-2 object-cover"
      />
      <p className="text-center text-xs font-semibold md:text-base text-slate-400">
        {props.data.desc}
      </p>
    </div>
  );
}

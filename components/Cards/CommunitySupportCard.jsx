import Image from "next/image";

export default function CommunitySupportCard(props) {
  return (
    <figure className="grid justify-between rounded-xl rounded-br-[3rem] border-2 border-primary-one p-5 transition-all hover:bg-primary-one/20 hover:shadow-xl focus:bg-none">
      <h3 className="text-center text-2xl font-bold text-primary-one">
        {props.data.title}
      </h3>
      <div className="mx-auto h-32 w-32">
        <Image
          src={props.data.image}
          alt={props.data.title}
          className="h-full w-full object-contain"
        />
      </div>
      <figcaption>
        <p className="text-center font-semibold text-slate-300">
          {props.data.desc}
        </p>
      </figcaption>
    </figure>
  );
}

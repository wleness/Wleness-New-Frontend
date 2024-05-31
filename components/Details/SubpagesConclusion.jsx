import Image from "next/image";

export default function SubpagesConclusion(props) {
  const imageAlignmentClass =
    props.data.position === "left" ? "lg:w-1/2" : "lg:w-1/2";

  return (
    <section className="container mx-auto py-8 lg:flex">
      <div className={`mb-4 ${imageAlignmentClass}`}>
        <Image
          src={props.data.image}
          alt="conclusion bulb image"
          className="mx-auto w-80"
        />
      </div>
      <div className={`lg:w-1/2 ${props.data.position === "left" ? "" : ""}`}>
        <h2 className="mb-4 text-2xl font-bold text-primary-one">
          {props.data.title}
        </h2>
        <p className="text-lg font-semibold text-gray-400">{props.data.desc}</p>
      </div>
    </section>
  );
}

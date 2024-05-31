import Image from "next/image";

const Card = ({ image, heading, description }) => (
  <div className="mx-auto max-w-md cursor-pointer overflow-hidden rounded-xl pt-4 transition-all hover:bg-gradient-to-br hover:from-yellow-300/30 hover:to-primary-one/20 hover:shadow-xl">
    <div>
      <Image
        width={112}
        height={112}
        src={image}
        alt={heading}
        className="mx-auto w-24 lg:w-28"
      />
    </div>
    <div className="lg:p-4">
      <h2 className="font-semibold text-primary-one lg:text-xl">{heading}</h2>
      <p className="text-xs font-semibold  lg:text-base text-slate-300">
        {description}
      </p>
    </div>
  </div>
);

export default function Benefits({ data }) {
  return (
    <section className="relative overflow-x-clip bg-black pb-4  pt-6 text-center xl:pb-6 xl:pt-10">
      <h1 className="subheading pb-4 text-white">
        Benefits of <span className="heading-primary">Music Healing</span>
      </h1>
      <div className="container mx-auto grid grid-cols-2 justify-center gap-4 !px-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-4">
        {data.map((value) => (
          <Card
            key={value.id}
            image={value.image}
            heading={value.heading}
            description={value.description}
          />
        ))}
      </div>
    </section>
  );
}

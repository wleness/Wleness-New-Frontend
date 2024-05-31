import Image from "next/image";

export default function WhyCoach({ name, image, lists }) {
  return (
    <section className="pt-4 lg:py-8 bg-slate-950">
      <div className="mb-6 mt-4 text-center lg:mb-8">
        <h2 className="subheading text-white">
          Why work with <span className="heading-primary">{name}</span>
        </h2>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/5">
          <Image
            src={image}
            alt={name}
            className="mx-auto rounded-lg lg:w-96"
          />
        </div>
        <div className="my-9 w-full lg:ml-8 lg:w-3/5">
          {lists.map((value, i) => {
            return (
              <div
                key={i}
                className="mb-8 rounded-xl border-2 border-primary-one bg-slate-900 p-4 text-sm shadow-md hover:bg-primary-one hover:text-black text-white md:p-8 md:text-base"
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

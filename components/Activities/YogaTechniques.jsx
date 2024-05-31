import Image from "next/image";

export default function YogaTechniques({ data }) {
  return (
    <section className="pb-6 bg-primary-two">
      <div className="container mx-auto">
        <div className="rounded-2xl py-4 text-center lg:mb-4 lg:py-8 xl:py-10">
          <h2 className="subheading heading-primary">{data.title}</h2>
          <p className="font-semibold lg:text-lg text-slate-300">{data.desc}</p>
        </div>

        {/* Yoga techniques */}
        <div className="grid justify-center gap-6 pb-4 lg:grid-cols-3 xl:gap-6">
          {data.types.map((value, index) => {
            return (
              <figure
                key={index}
                className="rounded-xl border border-primary-one bg-primary-one/5 p-4 py-7"
              >
                <div className="mx-auto w-36">
                  <Image
                    src={value.thumbnail}
                    alt={value.title}
                    width={145}
                    height={145}
                    className="block w-full rounded-full border-2 border-primary-one object-cover shadow-md shadow-primary-50"
                  />
                </div>
                <figcaption>
                  <h4 className="py-4 text-center text-xl font-bold capitalize text-primary-one">
                    {value.title}
                  </h4>
                  <p className="para text-center !text-sm">{value.desc}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

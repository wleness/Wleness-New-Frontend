import { profileMask } from "@public";
import Image from "next/image";

export default function WlenessCoaching({ data }) {
  return (
    <section className="py-8 text-center bg-slate-950">
      <div className="container mx-auto">
        <h2 className="subheading text-white">
          <span>Wleness </span>
          <span className="heading-primary"> lifestyle coaching </span>
        </h2>
        <div className="mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
          {data.map((value, i) => {
            return (
              <figure
                key={i}
                className="cursor-pointer rounded-2xl p-4 text-center hover:shadow-xl"
              >
                <div className="relative mx-auto mb-4 h-36 w-36 lg:h-40 lg:w-40">
                  <div className="h-full w-full rounded-full">
                    <Image
                      src={value.image}
                      alt=""
                      width={176}
                      height={176}
                      className="h-full w-full rounded-full object-cover object-top"
                    />
                  </div>
                  <Image
                    src={profileMask}
                    alt=""
                    width={176}
                    height={176}
                    className="absolute left-1/2 top-0 -translate-x-[55%] scale-110 object-cover"
                  />
                </div>
                <figcaption className="font-semibold">
                  <h2 className="mb-2 text-xl font-bold text-primary-one">
                    {value.name}
                  </h2>
                  <p className="text-sm text-slate-400">{value.desc}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

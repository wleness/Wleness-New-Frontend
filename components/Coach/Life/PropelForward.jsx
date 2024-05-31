import { textColorize } from "@utils";
import Image from "next/image";

export default function PropelForward({ data }) {
  return (
    <section className="text-center bg-primary-two pb-14">
      <div className="container mx-auto">
        <h2 className="subheading mb-3 pt-10">{textColorize(data.title)}</h2>
        <p className="pb-12 font-medium md:text-lg lg:mx-auto text-slate-300">
          {data.desc}
        </p>
        <div className="mb-14 grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-4 lg:gap-6 xl:gap-10">
          {data.list.map((value, i) => {
            return (
              <figure
                key={i}
                className="cursor-pointer rounded-xl border border-yellow-200 p-3 shadow-sm shadow-yellow-200 hover:bg-yellow-300/10 lg:p-5"
              >
                <div>
                  <Image
                    src={value.image}
                    alt=""
                    className="mx-auto mb-2 w-16 lg:w-28"
                    width={112}
                    height={112}
                  />
                </div>
                <figcaption>
                  <h2 className="heading-primary mb-1 inline-block font-bold text-primary-400 lg:mb-3 lg:text-xl">
                    {value.title}
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 lg:text-base">
                    {value.desc}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

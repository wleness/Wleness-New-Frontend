import { bgExecutiveApproach } from "@public";
import Image from "next/image";

export default function OurApproach({ data }) {
  return (
    <section className="relative bg-black overflow-x-clip pb-8">
      <div className="container mx-auto text-center">
        <h2 className="subheading lg:px-24 text-white">
          <span className="heading-primary">Our Approach</span>
          <span> to Crafting Your Leadership Journey </span>
        </h2>
      </div>

      <div className="relative mt-6 mb-10">
        <Image
          src={data.image}
          alt="Wleness - Our Approach to Crafting Your Leadership Journey "
          className="h-[500px] w-full object-cover object-top"
          width={1520}
          height={500}
        />
        <div className="absolute inset-0 w-full  bg-black/60 lg:flex">
          <div className="container mx-auto lg:grid lg:grid-cols-3">
            {data.list.map((value, i) => {
              return (
                <div
                  className="px-4 py-4 lg:flex lg:items-end lg:px-6 lg:py-8"
                  key={i}
                >
                  <div className="group cursor-pointer">
                    <h2 className="mb-4 text-2xl font-semibold text-white">
                      {value.title}
                    </h2>
                    <ul className="hidden transition-all group-hover:block">
                      {value.list.map((element, j) => {
                        return (
                          <li key={j} className="text-sm text-slate-200">
                            {element}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-6 pt-2 lg:mb-4 lg:px-28">
        <h2 className="mb-4 text-center text-2xl font-semibold text-primary-one lg:text-3xl">
          {data.bridge_title}
        </h2>
        <p className="text-center font-medium lg:text-lg text-slate-300">
          {data.bridge_desc}
        </p>
      </div>
    </section>
  );
}

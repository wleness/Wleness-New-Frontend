import { leaf } from "@public";
import Image from "next/image";

export default function Symptoms({ data }) {
  return (
    <section className="py-5 text-center bg-black">
      <div className="container mx-auto">
        <h2 className="subheading mb-2 text-white">
          <span>Here&apos;s How Generalized</span>
          <p>
            <span className="heading-primary">{data.highlight} </span>
            <span>May Appear</span>
          </p>
        </h2>

        <div className="grid items-center lg:grid-cols-2">
          <div className="lg:order-2">
            <Image src={data.image} alt="" className="object-cover" />
          </div>

          {/* Points */}
          <ul className="flex flex-col justify-between gap-y-4 pl-6 text-left text-2xl text-primary-one lg:order-1 lg:py-7 xl:py-12 xl:pl-7 xl:pr-10">
            {data.points.map((value, index) => {
              return (
                <li key={index} className="flex items-start">
                  <Image src={leaf} alt="Leaf Icon" className="mr-2 h-6 w-6 " />
                  <p className="text-lg font-semibold text-slate-300">
                    {value}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { textColorize } from "@utils";
import Image from "next/image";

export default function Results({ data }) {
  return (
    <section className="relative bg-primary-two py-6">
      <div className="container mx-auto lg:flex lg:gap-x-5">
        <div className="mb-6 flex justify-end lg:order-2 lg:w-2/5">
          <Image
            width={374}
            height={474}
            src={data.image}
            alt="Lifestyle coaching"
            className="w-full xl:w-[90%]"
          />
        </div>
        <div className="my-auto lg:order-1 lg:w-3/5">
          <h2 className="subheading mb-4">{textColorize(data.title)}</h2>
          <ul className="list-outside list-disc px-4 font-semibold  text-primary-one">
            {data.points.map((value, i) => {
              return (
                <li key={i} className="mb-4  p-2">
                  <p className="text-slate-300">
                    <span className="text-primary-one">{value[0]}</span>
                    <span>{value[1]}</span>
                    <span className="text-primary-one">{value[2]}</span>
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

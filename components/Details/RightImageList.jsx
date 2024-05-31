import { benefits, leaf } from "@public";
import Image from "next/image";

export default function RightImageList(props) {
  return (
    <div className="container mx-auto flex flex-col items-center lg:flex-row">
      <div className="lg:order-2 lg:w-1/2">
        <Image
          src={props.data.image ? props.data.image : benefits}
          alt={props.data.title}
          className="object-cover"
        />
      </div>
      <div className="py-4 font-semibold lg:order-1 lg:w-1/2 lg:p-8">
        <h2 className="mb-4 text-2xl font-bold text-primary-one">
          {props.data.title}
        </h2>
        <p>{props.data.desc}</p>
        <ul className="pt-4">
          {props.data.list.map((value, index) => {
            return (
              <li key={index} className="flex">
                <div>
                  <Image
                    src={leaf}
                    alt="Leaf Icon"
                    className="mr-6 h-6 w-6 object-contain"
                  />
                </div>
                <div>
                  <p className="mb-0 text-slate-400">
                    <span className="text-lg font-semibold text-primary-one">
                      {value.subtitle}
                    </span>
                    {value.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

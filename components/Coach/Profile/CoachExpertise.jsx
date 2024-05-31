import { leaf } from "@public";
import Image from "next/image";

export default function CoachExpertise({ heading, image, lists }) {
  return (
    <section className="bg-black pb-10">
      <div className="container mx-auto flex flex-col items-center border-4 border-slate-500 p-4 lg:flex-row lg:p-0">
        <div className="mb-8 lg:order-2 lg:mb-0">
          <Image
            src={image} // Replace with your image URL
            alt="Description of the image"
            className="rounded-lg lg:w-[520px] lg:-translate-x-12 xl:-translate-x-24 2xl:w-[620px]"
          />
        </div>
        <div className="w-full bg-slate-900 lg:order-1">
          <div className="my-8 w-full px-4 md:px-8 md:text-left lg:my-12 lg:w-4/5">
            <div>
              <h2 className="subheading text-white">{heading}</h2>
            </div>

            <ul className="list-disc text-slate-300">
              {lists.map((value, i) => {
                return (
                  <li
                    className="flex items-center py-2 text-left text-sm font-medium md:text-base lg:px-0"
                    key={i}
                  >
                    <Image src={leaf} alt="Icon 1" className=" mr-1 h-4 w-4" />
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

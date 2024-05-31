import { textColorize } from "@utils";
import Image from "next/image";

export default function Header(props) {
  return (
    <>
      <header className="relative animate-fadeIn overflow-x-clip bg-slate-900 pb-6 pt-12 xl:pb-10 xl:pt-16">
        <div className="container relative mx-auto flex flex-col items-center rounded-3xl py-2 lg:flex-row lg:py-6 2xl:justify-between">
          <div className="mb-6 lg:order-2 lg:mb-0 lg:w-[45%] 2xl:flex 2xl:justify-end">
            <Image
              src={props.image}
              alt={props.alt}
              className="w-full scale-105 rounded-2xl object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="mb-4 rounded-3xl py-5 md:mb-6 lg:order-1 lg:m-0 lg:mb-0 lg:w-[55%] lg:rounded-none xl:pl-0">
            <hgroup className="md:mb-3 xl:pr-20">
              <h1 className="subheading mb-4 text-center lg:text-left text-white">
                {textColorize(props.title)}
              </h1>
              <h5 className="mb-8 text-slate-300 text-center text-base font-medium md:text-lg lg:text-left">
                {props.desc}
              </h5>
            </hgroup>

            {props.button && (
              <div className="text-center lg:text-left">
                <button className="btn-one" onClick={props.button.action}>
                  Enquire Now
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

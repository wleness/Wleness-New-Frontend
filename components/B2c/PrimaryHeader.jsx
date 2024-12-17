import Image from "next/image";
// Swiper Js & Styles
import { montserrat, PrimaryHeaderImage, roboto_flex } from "@/public";
import { StarIcon } from "@components/Icons";
import Link from "next/link";
import HeaderTestimonialSlider from "@components/Sliders/HeaderTestimonialSlider";

export default function PrimaryHeader({
  title,
  desc,
  subtitle,
  button,
  clients,
}) {
  return (
    <header className="py-14 bg-primary-two pb-28">
      <div className="grid gap-y-3 mb-12 px-4 xl:px-20">
        <h1 className="text-center grid p-2">
          <span
            className={`text-4xl xl:text-[56px] leading-[56px] text-primary-one ${roboto_flex.className}`}
          >
            wleness
          </span>
          <span
            className={`text-white text-xs xl:text-base font-bold ${montserrat.className}`}
          >
            {desc}
          </span>
        </h1>
        <div>
          <h2
            className={`${montserrat.className} mb-2 font-semibold text-primary-one text-xs text-center xl:text-[20px]`}
          >
            {subtitle}
          </h2>
          <h3
            className={`${montserrat.className} text-lg font-bold text-white text-center xl:text-2xl grid xl:block`}
          >
            {title}
          </h3>
        </div>
        <div className="text-center">
          <Link
            href={button[1]}
            className={`${montserrat.className} btn-2 border-primary-one text-primary-one`}
          >
            <span className="flex items-center gap-x-2">
              <span>{button[0]}</span>
              <StarIcon theme={"light"} />
            </span>
          </Link>
        </div>
      </div>

      <div className="overflow-x-hidden">
        <Image
          src={PrimaryHeaderImage}
          alt="header image"
          className="w-[1024px] max-w-[1024px] -translate-x-[40%] xl:-translate-x-0 mx-auto xl:max-w-full xl:w-full"
        />
      </div>

      {clients && <HeaderTestimonialSlider />}
    </header>
  );
}

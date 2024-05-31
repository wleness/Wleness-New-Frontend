import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { home_service_banner } from "@data/home";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ServiceBanner() {
  return (
    <section className="container mx-auto mb-10 lg:mb-0 lg:-translate-y-24">
      <div className="grid gap-5 rounded-xl bg-primary-300 px-7 py-6 drop-shadow-lg md:grid-cols-2 lg:gap-0 lg:px-8 lg:py-10 xl:grid-cols-4">
        {home_service_banner.map((value, i) => {
          return (
            <div key={i} className="flex">
              <FontAwesomeIcon
                icon={value.icon}
                className="mr-3 mt-1 block font-semibold text-primary-200"
              />
              <div>
                <div>
                  <h2 className="mb-3 font-semibold text-white">
                    {value.name}
                  </h2>
                  <p className="mb-4 text-sm font-medium text-teal-50">
                    {value.description}
                  </p>
                </div>
                <Link
                  href={value.slug}
                  className={`group inline-block rounded-2xl border-2  px-4 py-[2px] ${
                    value.selected
                      ? "border-white bg-white"
                      : "border-primary-50 hover:border-white hover:bg-white"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`${
                      value.selected
                        ? "text-black"
                        : "text-white group-hover:text-black"
                    }`}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

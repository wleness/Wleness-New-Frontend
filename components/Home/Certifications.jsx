import { homeCertified } from "@data/home";
import Image from "next/image";

export default function Certifications() {
  return (
    <section className="bg-primary-10 py-10 lg:mt-20">
      <div className="container relative mx-auto mb-5 mt-5 lg:mt-0">
        <div className="mx-auto pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8">
          <h1 className="subheading sm:pb-0 lg:mb-4">
            We are <span className="heading-primary">Certified</span>
          </h1>
          <p className="para mb-4">
            We're certified as the top mental well-being platform, trusted by
            thousands for our proven results. Our expert team offers India’s
            best personalized support to enhance mental health and well-being.
            Experience the best mental online therapy and wellness with our
            comprehensive services tailored to your needs.
          </p>
        </div>
        <div className="grid gap-y-6 lg:grid-cols-3 lg:gap-x-8">
          {homeCertified.map((value, i) => {
            return (
              <figure
                key={i}
                className={`rounded-xl px-6 py-8 shadow-lg lg:px-8 ${
                  value.dark ? "bg-primary-400" : "bg-white"
                }`}
              >
                <div className="mb-2 h-10 w-28 text-left">
                  <Image
                    src={value.image}
                    alt={value.title}
                    className="h-full object-contain"
                  />
                </div>
                <figcaption>
                  <h4
                    className={`mb-2 text-lg font-extrabold ${
                      value.dark ? "text-white" : "text-primary-400"
                    }`}
                  >
                    {value.title}
                  </h4>
                  <p
                    className={`text-sm font-semibold ${
                      value.dark ? "text-slate-100" : "text-slate-500"
                    }`}
                  >
                    {value.description}
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

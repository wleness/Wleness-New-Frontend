import Image from "next/image";
import Link from "next/link";

export default function Coaches({ title, coaches }) {
  return (
    <section className="py-5 xl:pb-10 text-center bg-primary-two">
      <div className="container mx-auto">
        <h2 className="subheading mb-3 pt-10 text-white">
          <span>Our </span>
          <span className="heading-primary">{title}</span>
        </h2>

        <div className="mt-4 flex flex-wrap justify-center gap-12 lg:grid-cols-3 lg:gap-24">
          {coaches.map((value, i) => {
            return (
              <Link key={i} href={value.slug} className="block">
                <div className="mb-4">
                  <Image
                    src={value.image}
                    alt={value.alt}
                    width={176}
                    height={176}
                    className="mx-auto w-44"
                  />
                </div>
                <figcaption>
                  <h2 className="text-lg font-bold lg:text-2xl text-white">
                    {value.name}
                  </h2>
                  <h4 className="font-semibold text-slate-400">
                    {value.profession}
                  </h4>
                </figcaption>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

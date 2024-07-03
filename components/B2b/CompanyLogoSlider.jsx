import { CompanyLogo1 } from "@public";
import Image from "next/image";

export default function CompanyLogoSlider() {
  return (
    <section className="bg-primary-two pt-10 xl:pt-20">
      <div className="bg-primary-one py-16 overflow-hidden relative whitespace-nowrap">
        <div className="animate-slider">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, i) => (
            <Image
              key={i}
              src={CompanyLogo1}
              alt="Company logo image"
              className="w-40 xl:w-60 inline-block mx-5"
            />
          ))}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, i) => (
            <Image
              key={i}
              src={CompanyLogo1}
              alt="Company logo image"
              className="w-40 xl:w-60 inline-block mx-5"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

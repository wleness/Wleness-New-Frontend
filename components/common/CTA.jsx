import { StarIcon } from "@components/Icons";
import { PRICING } from "@data/urls";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMessage, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { montserrat } from "@public";
import Link from "next/link";

export default function CTA({ isMobile }) {
  return (
    <div
      className={`text-primary-one  fixed top-72 -right-24 z-40 bg-slate-700 pl-4 grid-cols-[1fr_1fr_1fr_3fr] items-center -rotate-90 ${
        isMobile ? "grid" : "hidden xl:grid"
      }`}
    >
      <Link href={"tel:9147047488"} target="_blank">
        <FontAwesomeIcon icon={faPhoneVolume} />
      </Link>
      <Link href={"https://wa.me/919147047488"} target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
      <span>
        <FontAwesomeIcon icon={faMessage} />
      </span>
      <Link
        href={"/#patterns"}
        className={`${montserrat.className} btn-2 border-primary-one text-black bg-primary-one`}
      >
        <span className="flex items-center gap-x-2">
          <span>Connect</span>
          <StarIcon theme={"dark"} />
        </span>
      </Link>
    </div>
  );
}

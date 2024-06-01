import { StarIcon } from "@components/Icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMessage, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { montserrat } from "@public";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="text-primary-one fixed top-72 -right-24 z-40 bg-slate-700 pl-4 grid grid-cols-[1fr_1fr_1fr_3fr] items-center -rotate-90">
      <span>
        <FontAwesomeIcon icon={faPhoneVolume} />
      </span>
      <span>
        <FontAwesomeIcon icon={faWhatsapp} />
      </span>
      <span>
        <FontAwesomeIcon icon={faMessage} />
      </span>
      <Link
        href={"/"}
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

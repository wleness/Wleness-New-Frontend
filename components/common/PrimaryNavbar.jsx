import { Favicon, montserrat } from "@/public";
import { StarIcon } from "@components/Icons";
import Image from "next/image";
import Link from "next/link";

export default function PrimaryNavbar() {
  return (
    <nav className="p-4 xl:px-10 py-3 bg-primary-two">
      <div className="flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image
              src={Favicon}
              alt="website favicon"
              className="w-10 xl:w-12"
            />
          </Link>
        </div>
        <div className="flex gap-x-2">
          <Link
            className="btn-2 border-primary-one text-primary-one"
            href={"/b2b"}
          >
            For your team
          </Link>

          <Link
            href={"/"}
            className={`${montserrat.className} btn-2 border-primary-one bg-primary-one`}
          >
            <span className="flex items-center gap-x-2">
              <span>Connect</span>
              <StarIcon theme={"dark"} />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

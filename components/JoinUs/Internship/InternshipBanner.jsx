import { internshipBanner } from "@public";
import Image from "next/image";
import Link from "next/link";

export default function InternshipBanner({ url, new_page }) {
  return (
    <section className="bg-primary-two">
      <div className="container mx-auto">
        <Link href={url} target={`${new_page ? "_blank" : "_self"}`}>
          <Image
            src={internshipBanner}
            alt="Internship banner"
            className="rounded-xl"
          />
        </Link>
      </div>
    </section>
  );
}

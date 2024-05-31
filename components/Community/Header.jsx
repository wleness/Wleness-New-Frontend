import { bgDotsPattern, communityHeader } from "@public";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative overflow-x-hidden overflow-y-clip bg-primary-50/30">
      <div className="container mx-auto text-center">
        <h1 className="subheading my-8">
          <span className="heading-primary">Escape, Heal and Thrive </span>
          <span>with the Wleness Community</span>
        </h1>

        <div className="mb-8">
          <Image
            src={communityHeader}
            alt=""
            className="mb-10 w-full"
            width={1280}
            height={640}
          />
          <p className="mb-5 font-bold lg:text-lg xl:px-44 xl:text-xl">
            Let's come together and build a supportive community where we share,
            grow, and heal as one.
          </p>
          <Link
            href="https://community.wleness.com/"
            target="_blank"
            className="btn-one"
          >
            Participate Now
          </Link>
        </div>
      </div>

      {/* Dots  */}
      <Image
        src={bgDotsPattern}
        alt=""
        className="absolute -right-10 top-24 -z-10 hidden w-40 lg:block xl:w-72"
        width={320}
        height={180}
      />
      <Image
        src={bgDotsPattern}
        alt=""
        className="absolute -left-20 bottom-32 -z-10 hidden w-44 lg:block xl:w-80"
        width={350}
        height={200}
      />
    </header>
  );
}

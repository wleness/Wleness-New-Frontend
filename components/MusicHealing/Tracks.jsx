import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
// Data
import { wlenessExploreTracks } from "@public";
import { MUSICAL_HEALING_TRACKS } from "@data/urls";

export default function Tracks() {
  return (
    <section className="pb-6 xl:pb-12 bg-black">
      <div className="container mx-auto lg:flex">
        <div className="relative z-20">
          <Image
            src={wlenessExploreTracks}
            alt="Wleness - Music Healing Tracks for Peace and Relaxation"
            className="md:w-96 xl:w-80"
            width={305}
            height={305}
          />
          <Link
            href={MUSICAL_HEALING_TRACKS}
            className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary-one p-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black lg:h-10 lg:w-10">
              <FontAwesomeIcon icon={faPlay} className="text-primary-one" />
            </span>
          </Link>
        </div>

        <div className="z-10 flex flex-col justify-center rounded-2xl bg-slate-900 px-4 py-8 text-left lg:-ml-20 xl:px-8">
          <div className=" mx-auto xl:w-4/5 ">
            <h2 className="mb-2 text-lg font-semibold xl:text-2xl text-white">
              Wleness has launched some special tracks for peace and relaxation
            </h2>
            <p className="font-medium text-slate-300">
              Discover our music tracks for calm and meditative mind which
              brings a sense of direction and clarity as well
            </p>
            <div className="text-right">
              <Link
                href={MUSICAL_HEALING_TRACKS}
                className="font-bold uppercase text-primary-one transition-all hover:underline lg:text-xl"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

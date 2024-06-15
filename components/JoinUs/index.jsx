import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// Data
import { joinUsList } from "../../data/navigation";
import { profileMask } from "@public";
import Link from "next/link";
import Image from "next/image";

export default function JoinUs({ isOpen, onClose }) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".joinus")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 items-center justify-center backdrop-blur-none backdrop-brightness-50 backdrop-filter ${
        isOpen ? "grid" : "hidden"
      }`}
    >
      <div className="joinus relative flex w-[90%] flex-col items-center rounded-lg bg-slate-800 p-6 shadow-md md:w-1/2 md:flex-row md:p-20 border-2 border-primary-one/50">
        <div>
          <h2 className="mb-4 text-center text-3xl font-extrabold text-primary-one md:text-5xl">
            Join Us
          </h2>
          <p className="text-center text-sm font-semibold md:text-base text-slate-400">
            Do you wish to become a mental health warrior? Save lives and make a
            difference! Join our noble cause, choose your expertise, and be part
            of an amazing team dedicated to improving mental well-being
            worldwide today.
          </p>
          <div className="mt-4 grid grid-cols-2 justify-center gap-y-4 lg:grid-cols-4">
            {joinUsList.map((value, index) => {
              return (
                <figure key={index}>
                  <div>
                    <Link
                      href={value.slug}
                      onClick={onClose}
                      className="relative mx-auto mb-2 block h-24 w-24 transition-all hover:scale-105  hover:drop-shadow-xl lg:h-28 lg:w-28"
                    >
                      <Image
                        src={value.image}
                        alt={value.name}
                        width={96}
                        height={96}
                        className="mx-auto mb-1 h-24 w-24 transition-all md:h-28 md:w-28"
                      />
                      <Image
                        src={profileMask}
                        alt=""
                        className="absolute left-1/2 top-1/2 -translate-x-[55%] -translate-y-1/2 scale-110 object-cover"
                      />
                    </Link>
                  </div>
                  <figcaption>
                    <h5 className="text-center text-xs font-semibold text-primary-one md:text-base">
                      <Link href={value.slug} onClick={onClose}>
                        {value.name}
                      </Link>
                    </h5>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute right-5 top-5 cursor-pointer text-3xl text-white"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

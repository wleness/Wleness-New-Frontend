import { faArrowLeft, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ThankYou() {
  return (
    <section className="z-50 grid place-items-center bg-primary-two py-12 transition-all">
      <div className="relative w-4/5 rounded-xl bg-slate-800 p-6 shadow-lg lg:w-[480px]">
        <div className="text-center lg:px-8 lg:py-6">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="mb-4 text-3xl text-primary-one lg:text-6xl"
          />
          <h2 className="mb-4 text-xl font-semibold text-primary-one lg:text-3xl">
            Thank You
          </h2>
          <p className="mb-5 font-semibold text-slate-400">
            Your request has been successfully received! We will get in touch
            within 2 days.
          </p>
          <Link
            href="/"
            className="btn-one mx-auto flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

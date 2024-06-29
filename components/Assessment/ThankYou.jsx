"use client";
import { ASSESSMENT_RESULT } from "@data/urls";
import { faArrowRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ThankYou({ status, setStatus }) {
  if (!status) {
    return null;
  }

  return (
    <section className="fixed inset-0 z-50 grid place-items-center bg-black/50">
      <div className="enquiry-form relative w-4/5 rounded-2xl bg-slate-800 p-6 lg:w-[500px]">
        <div className="text-center lg:px-8 lg:py-6">
          <h2 className="mb-4 text-xl font-semibold text-primary-one lg:text-3xl">
            Congratulations!
          </h2>
          <p className="mb-4 font-semibold text-slate-200">
            Now you are available to claim your session @599
          </p>
          <Link
            href="/experts/all"
            className="btn-one mx-auto mb-3 flex items-center space-x-2"
          >
            <span>Book Now</span> <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <p className="mb-4 font-medium text-slate-200">To see your result</p>
          <Link
            href={ASSESSMENT_RESULT}
            className="btn-one mx-auto flex items-center space-x-2"
          >
            <span>Continue</span> <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <button
          onClick={() => setStatus(false)}
          className="absolute -right-3 -top-3 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-200 p-3 text-2xl transition-all hover:bg-gray-300"
        >
          <FontAwesomeIcon
            icon={faClose}
            className="text-gray-500 lg:text-3xl"
          />
        </button>
      </div>
    </section>
  );
}

export default ThankYou;

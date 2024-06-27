import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Success() {
  return (
    <section className="bg-primary-two">
      <div className="container mx-auto xl:pt-20">
        <div className="mx-auto flex flex-col items-center justify-center rounded-lg bg-slate-800 px-5 py-8 text-center lg:w-[520px] lg:py-14">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="mb-4 text-7xl text-primary-one"
          />
          <h1 className="subheading heading-primary">Confirmed appointment</h1>
          <p className="mb-8 font-semibold text-slate-400 xl:px-8">
            Your appointment has been confirmed! Please check your email for
            your appointment details.
          </p>
          <Link href="/" className="btn-one inline-block">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

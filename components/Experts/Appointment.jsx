import { PRICING } from "@data/urls";
import Link from "next/link";

export default function Appointment() {
  return (
    <section className="bg-primary-two pb-12">
      <div className="container mx-auto rounded-2xl bg-slate-800 p-8 text-center lg:p-14">
        <h2 className="subheading mb-2">
          <span className="text-white">Book an </span>
          <span className="heading-primary !text-primary-one">appointment</span>
          <span className="text-white"> now</span>
        </h2>
        <p className="mb-6 text-center font-medium lg:text-lg text-slate-300">
          We are excited to embark on this wellness journey with you and are
          committed to providing you with the highest quality of care and
          support. Your health and well-being are our top priorities, and we
          look forward to assisting you in achieving your therapeutic goals.
        </p>
        <div className="text-center">
          <Link href={PRICING} className="btn-one">
            Make an appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

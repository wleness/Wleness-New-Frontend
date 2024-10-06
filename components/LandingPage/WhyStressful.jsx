import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LandingPageImage, TradingSuccess } from "@public";
import Image from "next/image";

export default function WhyStressful() {
  return (
    <section className="bg-slate-950 py-16 lg:py-20">
      <div className="container mx-auto">
        <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-5 xl:mb-12">
          Why Managing Stress is Key to Your
          <span className="text-primary-one"> Trading Success</span>
        </h3>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              className="object-cover rounded-lg lg:w-96 mx-auto"
              src={TradingSuccess}
              alt=""
            />
          </div>
          <div className="space-y-4 xl:space-y-8">
            <h5 className="font-medium text-white text-xl">
              Learning how to handle stress will:
            </h5>
            <ul className="space-y-4 px-4">
              <li className="text-slate-300 flex gap-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-primary-one w-5"
                />
                <span>Help you make better, calmer decisions.</span>
              </li>
              <li className="text-slate-300 flex gap-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-primary-one mr-1 w-5"
                />
                <span>Reduce emotional, impulsive trades.</span>
              </li>
              <li className="text-slate-300 flex gap-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-primary-one mr-1 w-5"
                />
                <span>
                  Clear your mind so you can spot opportunities faster.
                </span>
              </li>
              <li className="text-slate-300 flex gap-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-primary-one mr-1 w-5"
                />
                <span>Keep you in the game longer by avoiding burnout.</span>
              </li>
            </ul>
            <p className="text-white">
              We&apos;ve got something that could really help. Wleness is
              organizing an insightful webinar on Stress Management for Traders.
              It&apos;s designed to help you take control of the stress that
              comes with trading and give you tools to handle it better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

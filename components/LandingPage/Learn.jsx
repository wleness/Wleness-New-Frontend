import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LandingPageImage } from "@public";
import Image from "next/image";

const list_data = [
  "Techniques to stay calm",
  "Strategies to avoid emotional trading traps.",
  "How to build a trading routine that minimizes stress.",
  "Mindfulness exercises to manage stress in real-time",
  "Access to live coaching and Q&A with stress management experts.",
];

export default function Learn() {
  return (
    <section className="bg-slate-950 py-12 lg:py-20">
      <div className="container mx-auto">
        <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-5 xl:mb-12">
          What You&apos;ll Learn in This
          <span className="text-primary"> Webinar</span>
        </h3>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              className="object-cover rounded-lg"
              src={LandingPageImage}
              alt=""
            />
          </div>
          <div className="space-y-4">
            {list_data.map((value, i) => {
              return (
                <h5
                  key={i}
                  className="font-medium text-white border p-4 rounded-xl hover:text-primary-one hover:border-primary-one cursor-pointer transition-all flex gap-2"
                >
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary-one w-5"
                  />
                  <span>{value}</span>
                </h5>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { about6, problem } from "@public";
import Image from "next/image";

export default function Challenges() {
  return (
    <>
      <section className="pb-4 pt-5 bg-black text-center lg:pt-7 lg:py-8">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="my-auto w-full text-left lg:order-2 lg:w-1/2 lg:text-left">
              <h2 className="subheading mb-2 text-white font-semibold">
                <span>Unmasking the </span>
                <span className="heading-primary"> Challenges</span>
              </h2>
              <p className="text-base font-medium lg:text-lg text-slate-400">
                In today's fast-paced world, the demands of modern life, coupled
                with the pervasive influence of digital devices and social
                media, can amplify feelings of stress, anxiety, and isolation.
                While therapy is a potential solution, it's not always
                accessible due to costs, societal stigmas, or geographical
                barriers. The digital age calls for comprehensive, affordable
                mental health solutions that transcend these limitations, yet a
                unified platform addressing holistic wellness remains elusive,
                forcing individuals to search across various forums.
              </p>
            </div>

            <div className="mx-auto my-auto w-full lg:order-1 lg:w-1/2">
              <Image
                src={problem}
                alt="Wleness - Unmasking The Challenges"
                className="mx-auto w-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse justify-center border-4 bg-black border-slate-900 md:flex-row">
        <div className="container mx-auto my-auto w-full bg-slate-900 py-8 text-center md:w-3/4">
          <div className="my-4 text-left md:ml-40 lg:ml-24 xl:ml-40">
            <h2 className="subheading text-white">
              <span>Charting the path </span>
              <span className="heading-primary"> Forward</span>
            </h2>
          </div>
          <div className="w-full text-left md:ml-40 text-slate-400 md:mr-0 md:w-3/5 lg:mb-12 lg:ml-24 xl:ml-40">
            <p className="text-base font-medium lg:text-lg">
              Wleness delivers a comprehensive approach to well-being,
              consolidating essential resources into one unified platform.
              Utilizing cutting-edge telehealth technology, Wleness bridges
              distances by linking users with certified experts, ensuring
              tailored interventions. Beyond conventional counseling, Wleness
              introduces innovative healing modalities such as Music Healing and
              Sadhna. In fostering a secure, anonymous space, it encourages
              candid discussions on mental health. Additionally, Wleness
              underscores the significance of life and executive coaching,
              empowering individuals to surmount obstacles, realize their
              potential, and achieve their aspirations.
            </p>
          </div>
        </div>
        <div className="mx-auto my-auto transform md:mt-0 md:translate-x-0 lg:my-auto lg:-translate-x-32 lg:text-center">
          <Image
            src={about6} // Replace with your image URL
            alt="Wleness - Charting the path Forward"
          />
        </div>
      </section>
    </>
  );
}

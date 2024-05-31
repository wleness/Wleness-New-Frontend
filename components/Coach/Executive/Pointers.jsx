import { useState } from "react";

export default function Pointers({ data }) {
  const [activeService, setActiveService] = useState(0);
  const [activeIndividualService, setIndividualService] = useState(0);

  // Handle Executive Services
  const handleServices = (i) => {
    setActiveService(i);
  };

  // Handle Individual Services
  const handleIndividualServices = (i) => {
    setIndividualService(i);
  };
  return (
    <section className="bg-black">
      <section className="relative overflow-x-clip pb-6">
        <div className="container mx-auto text-center">
          <h2 className="subheading  lg:px-24 text-white">
            <span className="heading-primary">Wleness: </span>
            <span>Your Path to Transformational Success</span>
          </h2>

          <div className="my-6 grid grid-cols-2 gap-x-4 gap-y-10 rounded-xl bg-primary-one p-2 py-4 lg:my-10 lg:grid-cols-4 lg:gap-6 lg:p-4">
            {data.success_path.map((value, i) => {
              return (
                <div className="group relative z-20" key={i}>
                  <div className="z-20 grid h-full cursor-pointer place-items-center rounded-xl bg-slate-900 text-white p-1 py-4 text-center text-xs font-semibold group-hover:rounded-none group-hover:text-primary-one lg:px-8 lg:py-4 lg:text-lg">
                    <span>{value}</span>
                  </div>
                  <div className="absolute inset-0 -z-10 rounded-xl bg-primary-one transition-all group-hover:-inset-y-6 group-hover:lg:-inset-y-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container relative mx-auto overflow-x-clip pb-6">
        <div className="text-center">
          <h2 className="subheading text-white lg:px-24">
            <span>Our Range of </span>
            <span className="heading-primary">services for Corporates</span>
          </h2>
        </div>

        <div className="my-6 rounded-xl p-2 lg:p-4">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5">
            {data.corporate_services.map((value, i) => {
              return (
                <div
                  key={i}
                  onMouseOver={() => handleServices(i)}
                  className={`grid cursor-pointer place-items-center rounded-2xl px-5 py-3 font-semibold transition-all hover:bg-primary-one ${
                    activeService == i
                      ? " bg-primary-one"
                      : " bg-slate-800 text-slate-300 "
                  }`}
                >
                  <h4 className="text-sm md:text-base">{value.title}</h4>
                </div>
              );
            })}
          </div>

          <div className="pt-8">
            <h2 className="mb-2 text-lg font-bold text-primary-one lg:text-2xl">
              {data.corporate_services[activeService].title}
            </h2>
            <p className="font-medium text-slate-300">
              {data.corporate_services[activeService].desc}
            </p>
          </div>
        </div>
      </section>

      <section className="container relative mx-auto overflow-x-clip pb-6">
        <div className="text-center">
          <h2 className="subheading text-white lg:px-24">
            <span>Our Range of </span>
            <span className="heading-primary">services for Individuals</span>
          </h2>
        </div>

        <div className="my-6 rounded-xl p-2 lg:p-4">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5">
            {data.individual_services.map((value, i) => {
              return (
                <div
                  key={i}
                  onMouseOver={() => handleIndividualServices(i)}
                  className={`grid cursor-pointer place-items-center rounded-2xl px-5 py-3 font-semibold transition-all hover:bg-primary-one ${
                    activeIndividualService == i
                      ? " bg-primary-one"
                      : " bg-slate-800 text-slate-300"
                  }`}
                >
                  <h4 className="text-sm md:text-base">{value.title}</h4>
                </div>
              );
            })}
          </div>

          <div className="pt-8">
            <h2 className="mb-2 text-lg font-bold text-primary-one lg:text-2xl">
              {data.individual_services[activeIndividualService].title}
            </h2>
            <p className="font-medium text-slate-300">
              {data.individual_services[activeIndividualService].desc}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

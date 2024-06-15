import { ourOfferings } from "@data/corporate";
import { blueFlower, circleArt, employeeTriangleHub } from "@public";
import Image from "next/image";

export default function WellbeingHub({ toggleForm }) {
  return (
    <>
      <section className="bg-black">
        <div className="relative overflow-x-clip">
          <div className="container mx-auto mb-4 rounded-2xl bg-slate-800 lg:py-6">
            <h2 className="grid py-2 text-center text-xl font-bold lg:text-3xl">
              <span className="mr-2 text-primary-one">
                Navigating from Burnout to Breakthrough:
              </span>
              <span className="text-white">
                Prioritizing Employee Well-being Amid Rising Organizational
                Stress
              </span>
            </h2>

            <p className="py-2 text-center  font-semibold lg:px-8 text-slate-300">
              Nourishing employee health and happiness helps to create a recipe
              for success and unleashes the full potential of a thriving
              workforce. Let our Workplace Wleness reveal the path to a better
              workplace for your team.
            </p>
          </div>

          <Image
            src={blueFlower}
            alt="Wleness - Comprehensive Employee Well-Being Hub"
            className="absolute -right-20 -top-24 w-32 lg:-top-44 lg:w-56 2xl:w-72"
          />

          <Image
            src={blueFlower}
            alt="Wleness - Comprehensive Employee Well-Being Hub"
            className="absolute -bottom-44 -left-20 w-32 lg:w-52 xl:-bottom-28 2xl:w-72"
          />
        </div>

        <div className="container mx-auto">
          <div className="items-center pb-6 text-center md:text-left lg:flex">
            <div className="py-2 lg:order-2 lg:w-1/2 lg:py-0">
              <Image
                src={employeeTriangleHub}
                alt="Wleness - Comprehensive Employee Well-Being Hub"
                className="mx-auto w-3/5 object-cover"
              />
            </div>
            <div className="lg:order-1 lg:w-1/2">
              <h2 className="subheading mb-2 !grid text-white">
                <span>Comprehensive Employee</span>
                <span className="text-primary-one"> Well-being Hub</span>
              </h2>
              <p className="pb-6 text-sm font-semibold lg:pr-8 lg:text-base text-slate-300">
                Discover a seamless solution for your employee well-being needs
                with our integrated corporate wellness platform. Equipped with
                state-of-the-art features, it offers a holistic approach to
                caring for your workforce. From physical wellness to mental
                health, our platform ensures all aspects of employee well-being
                are addressed effectively. Elevate productivity, satisfaction,
                and engagement through this cutting-edge tool to meet your
                company&apos;s unique requirements.
              </p>
              <button className="btn-one" onClick={toggleForm}>
                Enquiry now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-x-clip pb-12 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="subheading  lg:px-24 text-white">
            <span className="text-primary-one">Our Offerings </span>To Your
            Employees
          </h2>

          <div className="my-6 grid grid-cols-4 gap-2 rounded-xl bg-yellow-200 p-2 lg:my-10 lg:gap-6 lg:p-4">
            {ourOfferings.map((value, i) => {
              return (
                <div className="group relative z-20" key={i}>
                  <div className="z-20 grid h-full cursor-pointer place-items-center rounded-xl bg-slate-900 p-1 text-center text-xs font-semibold group-hover:rounded-none group-hover:text-primary-one lg:px-8 lg:py-4 lg:text-lg text-slate-300">
                    <span>{value}</span>
                  </div>
                  <div className="absolute inset-0 -z-10 rounded-xl bg-yellow-200 transition-all group-hover:-inset-y-6 group-hover:lg:-inset-y-10"></div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button className="btn-one" onClick={toggleForm}>
              Enquiry now
            </button>
          </div>
        </div>

        <Image
          src={circleArt}
          alt=""
          className="absolute -bottom-24 -right-80 lg:-right-[420px] lg:bottom-0 2xl:-right-96"
        />
        <Image
          src={circleArt}
          alt=""
          className="absolute -left-80 -top-56 hidden md:block lg:-left-[410px] lg:-top-[380px] 2xl:-left-96"
        />
      </section>
    </>
  );
}

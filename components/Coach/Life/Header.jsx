import Image from "next/image";

export default function Header({ data, toggleForm }) {
  return (
    <header className="relative overflow-x-clip bg-primary-two pb-6 pt-12 xl:pb-10 xl:pt-16">
      <div className="container mx-auto xl:flex xl:items-center xl:gap-x-5">
        <div className="mb-5 flex justify-end xl:order-2 xl:mr-4 xl:w-1/2">
          <Image
            className="w-full"
            src={data.image}
            alt="Wleness Services - Lifestyle Coaching"
          />
        </div>
        <div className="xl:order-1 xl:w-1/2">
          <hgroup className="mb-6 xl:mb-8">
            <h1 className="subheading text-white">{data.title}</h1>
            <h2 className="text-2xl font-semibold text-slate-300">
              <span className="">{data.subtitle[0]} </span>
              <span className="heading-primary ">{data.subtitle[1]}</span>
            </h2>
          </hgroup>

          <ul className="rounded-2xl bg-slate-900 p-3 text-center font-semibold lg:text-left xl:text-lg">
            <li className="mb-6 text-slate-200">{data.desc[0]}</li>
            <li className="para">{data.desc[1]}</li>
          </ul>

          <div className="mt-6">
            <button onClick={toggleForm} className="btn-one">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

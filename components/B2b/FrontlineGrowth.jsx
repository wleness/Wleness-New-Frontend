import { DoubleArrow, Icon2, Icon3, Icon4, Icon6, Icon7 } from "@/public";
import Image from "next/image";

const data = [
  {
    title: "Unattended Employees",
    image: Icon6,
    desc: "40% of employees suffer from common mental-health problems, a loss of one month",
    style: "md:-top-10 md:-left-16 left-0 -top-14",
  },
  {
    title: "Fragile Culture",
    image: Icon4,
    desc: "58% of employees would go with a competitor if they had a better culture.",
    style: "-top-10 md:-right-16 right-0",
  },
  {
    title: "Employee Unproductivity",
    image: Icon2,
    desc: "It costs as much as ~35% loss in the profit-potential due to this unproductivity",
    style: "-top-10 md:-left-16 left-0",
  },
  {
    title: "Employee Attrition",
    image: Icon7,
    desc: "It costs as much as 66% the role's annual CTC to replace someone in time & money.",
    style: "-top-10 md:-right-16 right-0",
  },
];

const ContainerBox = ({ value }) => {
  return (
    <div className="relative rounded-md cursor-pointer">
      <Image
        src={value.image}
        alt={value.title}
        className={`w-16 h-16 xl:w-28 xl:h-28 object-contain mx-auto absolute z-10 transition-all ${value.style}`}
      />
      <div className="border-2 bg-black border-primary-one z-20 relative">
        <h4 className="p-1 bg-primary-one font-medium">{value.title}</h4>
        <p className="text-slate-300 p-4">{value.desc}</p>
      </div>
    </div>
  );
};

export default function FrontlineGrowth() {
  return (
    <section className="px-2 xl:px-10 bg-primary-two overflow-x-hidden overflow-y-clip pt-10 xl:pt-20">
      <div className="mx-auto xl:w-[1024px]">
        <div className="flex flex-col md:flex-row mb-10 md:mb-0 gap-10 xl:gap-12">
          <ContainerBox value={data[0]} />
          <Image
            src={DoubleArrow}
            alt="Double arrow"
            className="hidden md:block"
          />
          <ContainerBox value={data[1]} />
        </div>
        <div className="py-8 justify-around hidden md:flex">
          <Image src={DoubleArrow} alt="Double arrow" className="rotate-90" />
          <Image src={DoubleArrow} alt="Double arrow" className="rotate-90" />
        </div>
        <div className="grid pb-8 md:grid-cols-2 gap-10 xl:gap-32">
          <ContainerBox value={data[2]} />
          <ContainerBox value={data[3]} />
        </div>

        <div className="text-center">
          <Image
            src={DoubleArrow}
            alt="Double arrow"
            className="rotate-90 mx-auto"
          />
          <Image
            src={Icon3}
            alt="Growth profit and loss"
            className="w-28 h-28 xl:w-36 xl:h-36 object-contain mx-auto group-even:order-2"
          />
          <h4 className="text-[#FF5500] text-2xl font-bold text-center">
            Dying Topline & Bottomline
          </h4>
        </div>
      </div>
    </section>
  );
}

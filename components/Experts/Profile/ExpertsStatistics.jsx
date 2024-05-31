import { bubbleDoodles } from "@public";
import Image from "next/image";

const StatisticsBlock = ({ number, suffix, subtitle }) => {
  return (
    <figure>
      <div className="relative">
        <div>
          <Image
            src={bubbleDoodles}
            alt=""
            className="mx-auto w-24 object-cover md:w-36"
          />
        </div>
        <span className="absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold lg:text-2xl">
          <span>{number}</span>
          <span>{suffix}</span>
        </span>
      </div>
      <figcaption>
        <h4 className="text-center font-bold lg:text-xl text-slate-200">
          {subtitle}
        </h4>
      </figcaption>
    </figure>
  );
};

export default function ExpertsStatistics(props) {
  return (
    <section className="bg-primary-two">
      <div className="container mx-auto grid grid-cols-2 items-center justify-between gap-4 pb-14 lg:grid-cols-4">
        <StatisticsBlock
          number={`${props.rating}/5`}
          suffix=""
          subtitle="User Rating"
        />
        <StatisticsBlock
          number={props.recommend}
          suffix="+"
          subtitle="Users Recommend"
        />
        <StatisticsBlock
          number={props.last_booked}
          suffix=" Hr"
          subtitle="Last Booked"
        />
        <StatisticsBlock
          number={props.ongoing}
          suffix=""
          subtitle="Ongoing Sessions"
        />
      </div>
    </section>
  );
}

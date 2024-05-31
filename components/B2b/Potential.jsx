import Image from "next/image";
import { PotentialBarGraph, PotentialChartGraph } from "@/public";
import PrimaryTitle from "@components/Title/PrimaryTitle";

export default function Potential() {
  return (
    <section className="px-4 xl:px-10 pt-36 bg-primary-two">
      <PrimaryTitle text={"Calculate your Potential Loss"} />
      <div className="grid gap-y-10 lg:gap-y-0 xl:grid-cols-2 p-8 mt-10 rounded-md">
        <div>
          <Image
            src={PotentialBarGraph}
            alt="potential bar graph"
            className="mx-auto"
          />
        </div>
        <div>
          <Image
            src={PotentialChartGraph}
            alt="potential chart graph"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

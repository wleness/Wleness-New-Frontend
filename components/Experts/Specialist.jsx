"use client";
import Link from "next/link";
import ExpertProfileCard from "@components/Cards/ExpertProfileCard";
import getExperts from "@utils/getExperts";

export default function Specialist() {
  const { status, doctorDetails } = getExperts();

  if (!status) {
    return <div className="mb-5 text-center">Loading...</div>;
  }
  return (
    <section className="pb-12 bg-slate-800">
      <div className="side-spacing grid-cols-[repeat(4, minmax(280, 1fr))] container mx-auto grid gap-5 p-4 sm:grid-cols-2 lg:pb-12 xl:py-16 3xl:gap-6">
        {doctorDetails.splice(0, 6)?.map((value, i) => {
          return <ExpertProfileCard key={i} data={value} />;
        })}
      </div>
      <div className="text-center">
        <Link href="/experts/all" className="btn-one">
          View all
        </Link>
      </div>
    </section>
  );
}

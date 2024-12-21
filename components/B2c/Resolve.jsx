"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ResolveCommunity, ResolveSelfHelp, ResolveSession } from "@/public";
import { ASSESSMENT, COMMUNITY, PRICING } from "@data/urls";
import PrimaryTitle from "@components/Title/PrimaryTitle";

const tabData = [
  {
    id: 1,
    label: "Self Help Kit",
    desc: "Get your self-care toolbox today! Access health and wellness resources to nurture your mental well-being from the comfort of your home. Connect with best counselors and best psychologists in India to receive personalized support. Free psychometric test is available to help you start your journey to better mental health.",
    title: "Self Care",
    image: ResolveSelfHelp,
    btn: {
      text: "Get your Free Kit",
      slug: ASSESSMENT,
    },
  },
  {
    id: 2,
    label: "Book a Session",
    desc: "Get the best and most recommended online therapy and guidance packages with India's best psychologists and therapists. Consult a psychologist online and connect with a trained and certified online counselor.",
    title: "Book a Session",
    image: ResolveSession,
    btn: {
      text: "Book Session",
      slug: PRICING,
    },
  },
  {
    id: 3,
    label: "Join our Community",
    desc: "The Wleness Mental Health community offers a safe, anonymous space to share your struggles and receive peer support from people around the world. Our trained experts moderate the community to ensure a supportive and understanding environment.",
    title: "Join Community",
    image: ResolveCommunity,
    btn: {
      text: "Join Our Community",
      slug: COMMUNITY,
    },
  },
];

export default function Resolve() {
  const [activeTab, setActiveTab] = useState(tabData[1]);

  const Box = ({ value }) => {
    return (
      <div id="resolve_home">
        <button
          onClick={() => setActiveTab(value)}
          className={`block mb-4 w-full border-2 text-sm md:text-base font-bold py-3 border-primary-one ${
            value.id == activeTab.id ? "bg-primary-one" : "text-white"
          }`}
          name={value.label}
        >
          {value.label}
        </button>

        <div className="h-full border border-primary-one py-10 hover:scale-[1.04] hover:shadow-md hover:shadow-primary-one/45 transition-all">
          <div>
            <Image
              src={value.image}
              alt="resolve image"
              width={450}
              className="w-48 h-48 mx-auto object-contain"
            />
            <p className="text-gray-400 text-center text-lg xl:px-16">
              {value.desc}
            </p>
            <div className="text-center mt-4">
              {value.btn.slug ? (
                <Link href={value.btn.slug} className="btn-2 bg-primary-one">
                  {value.btn.text}
                </Link>
              ) : (
                <button className="btn-2 bg-primary-one">
                  {value.btn.text}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="px-4 xl:px-10 pb-20 pt-10 xl:py-28 bg-primary-two">
      <PrimaryTitle text={"All humans have the same problems. "} />
      <p className="text-gray-400 font-semibold xl:text-2xl text-center text-xl">
        You&apos;re not alone. You&apos;re one of the many.
        Consult a psychologist online to re-discover yourself.
      </p>
      <div className="pt-8">
        <div className="grid gap-5 xl:grid-cols-3">
          {tabData.map((value, i) => (
            <Box value={value} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

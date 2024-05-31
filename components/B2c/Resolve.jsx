"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ResolveImage } from "@/public";
import { COMMUNITY, EXPERTS, USER_DASHBOARD } from "@data/urls";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import { StarIcon } from "@components/Icons";

const tabData = [
  {
    id: 1,
    label: "Self Help",
    title: "Self Care",
    image: ResolveImage,
    desc: [
      "Get a self-care toolbox that includes everything you need to care for yourself. Have a self-care day every day with our resources. Access health and wellness tools to nurture your mind, body, and spirit from the comfort of your home. Improve your mental well-being with accessible, at-home practices. ",
      "Our toolbox offers guidance and support for a healthier, happier you. Whether you need relaxation tips, healthy eating habits, or mental health advice, we've got you covered. Take the time to focus on yourself and enjoy the benefits of daily self-care. Start your journey to better health and wellness today with our comprehensive self-care toolbox, designed to help you thrive daily.",
    ],
    button: {
      text: "Get Started",
      slug: USER_DASHBOARD,
    },
  },
  {
    id: 2,
    label: "Session",
    title: "Book a Session",
    image: ResolveImage,
    desc: [
      "Need support? Book a session Now! You can schedule a time to connect with wellness experts here to support your journey. Whether you're seeking guidance on nutrition, fitness, mental health, or overall well-being, our sessions offer personalized attention to address your unique needs. Choose from various options, including one-on-one consultations, group workshops, or virtual classes tailored to your schedule and interests.",
      "Our team of India's top psychologists, therapists and counsellors is dedicated to helping you reach your goals and live your best life. Book a session today and take the first step toward a healthier, happier you.",
    ],
    button: {
      text: "Book Session",
      slug: EXPERTS,
    },
  },
  {
    id: 3,
    label: "Community",
    title: "Join Community",
    image: ResolveImage,
    desc: [
      "At Wleness, the community is at the heart of our mission. We’re more than just a platform; we’re a vibrant group dedicated to holistic well-being. Here, you’ll discover more than just a community. You’ll find a place where wellness thrives, and friendships blossom. The best part? You can remain as anonymous as you wish.",
      "Join us and become part of a leading community committed to holistic living. Experience the support, growth, and shared journey toward a healthier lifestyle. At Wleness, we believe in the power of togetherness and welcome you to be part of our thriving, health-focused community. Discover a place where wellness wins and friendships grow stronger every day.",
    ],
    button: {
      text: "Join Community",
      slug: COMMUNITY,
    },
  },
];

export default function Resolve() {
  const [activeTab, setActiveTab] = useState(tabData[2]);
  return (
    <section className="px-4 xl:px-10 pt-28 xl:pt-36 bg-primary-two">
      <PrimaryTitle text={"let's resolve now."} />
      <div className="pt-8">
        <div className="grid grid-cols-3">
          {tabData.map((value, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(value)}
              className={`text-white border-2 text-sm md:text-base font-bold py-3 ${
                value.id == activeTab.id
                  ? "border-primary-three bg-primary-three"
                  : "border-slate-400"
              }`}
              name={value.label}
            >
              {value.label}
            </button>
          ))}
        </div>
        <div className="grid xl:grid-cols-2 bg-[#000D15] border border-primary-three xl:p-4 pt-4 gap-8">
          <div>
            <Image
              src={ResolveImage}
              alt="resolve image"
              width={450}
              className="rounded-xl w-full h-64 xl:h-96 object-cover"
            />
          </div>
          <div className="px-4 pb-4 xl:p-0">
            <h2 className="text-white font-bold text-xl mb-2 xl:text-2xl">
              {activeTab.title}
            </h2>
            <p className="text-slate-400 !text-base grid gap-4">
              <span>{activeTab.desc[0]}</span>
              <span>{activeTab.desc[1]}</span>
            </p>
            <div className="text-right mt-4">
              <Link
                href={activeTab.button.slug}
                className="btn-2 bg-primary-one inline-block"
              >
                <span className="flex items-center gap-x-2">
                  {activeTab.button.text}
                  <StarIcon theme={"dark"} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

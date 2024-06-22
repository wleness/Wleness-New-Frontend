import CompanyLogoSlider from "@components/B2b/CompanyLogoSlider";
import FrontlineGrowth from "@components/B2b/FrontlineGrowth";
import Potential from "@components/B2b/Potential";
import UpgradeFrontline from "@components/B2b/UpgradeFrontline";
import PrimaryHeader from "@components/B2c/PrimaryHeader";
import { DummyClient } from "@public";

const clients = [
  {
    name: "Aryan singh",
    designation: "Designer",
    image: DummyClient,
    bg: "bg-[#05A0FD]",
    categories: ["ADHD", "Anxiety"],
    review:
      "It was a good start for our organization to work with Wleness on their mental health website. The self-paced workshops and individualized one-on-one counseling were valued by staff and fellows who found them to be practical and adaptable.",
  },
  {
    name: "Aryan singh",
    designation: "Designer",
    image: DummyClient,
    bg: "bg-[#FF5300]",
    categories: ["ADHD", "Anxiety"],
    review:
      "A valuable tool for maintaining employee health is a comprehensive Wellness Program that tracks and validates employee well-being data. This program can be a user-friendly platform where employees can input their health goals, track progress, and identify stressors.",
  },
  {
    name: "Aryan singh",
    designation: "Designer",
    image: DummyClient,
    bg: "bg-[#FFDB01]",
    categories: ["ADHD", "Anxiety"],
    review:
      "It is a great platform that allows our organization to recognize more consistently, with an awesome rewards catalog with something for everyone. Consistent recognition becomes effortless. Easy way to enable recognition within the company, with clear communication.",
  },
  {
    name: "Aryan singh",
    designation: "Designer",
    bg: "bg-[#05A0FD]",
    categories: ["ADHD", "Anxiety"],
    image: DummyClient,
    review:
      "Our employees loves the Community feature of this product to share information, updates, and ease of engagement with clients. Having your scheduler, communication tools, assessment, and data collection all bundled into one place is a game-changer.",
  },
];

export default function page() {
  return (
    <>
      <PrimaryHeader
        title="we amplify human performance & engagement."
        subtitle="business = f(money-in, money-out) = f(your frontline)"
        desc="your frontline brings your topline & defines your bottomline."
        clients={clients}
      />
      <FrontlineGrowth />
      <Potential />
      <CompanyLogoSlider />
      <UpgradeFrontline />
    </>
  );
}

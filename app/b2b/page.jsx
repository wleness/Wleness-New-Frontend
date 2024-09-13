import FrontlineGrowth from "@components/B2b/FrontlineGrowth";
import Potential from "@components/B2b/Potential";
import UpgradeFrontline from "@components/B2b/UpgradeFrontline";
import PrimaryHeader from "@components/B2c/PrimaryHeader";
import { B2B } from "@data/urls";
import {
  therapyClient1,
  therapyClient2,
  therapyClient3,
  therapyClient4,
} from "@public";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Empower Your Workforce: Wleness Corporate Mental Wellbeing",
  description:
    "Invest in your team's well-being with Wleness Corporate Programs. Reduce stress, improve engagement, and empower your workforce!",
  alternates: {
    canonical: getCanonical(B2B),
  },
};

const clients = [
  {
    name: "Jeevan Kale",
    designation: "Content Writer",
    image: therapyClient1,
    bg: "bg-[#ff53f6]",
    categories: ["Stress", "Anxiety"],
    review:
      "It was a good start for our organization to work with Wleness on their mental health website. The self-paced workshops and individualized one-on-one counseling were valued by staff and fellows who found them to be practical and adaptable.",
  },
  {
    name: "Paras Shewale",
    designation: "Software Engineer",
    image: therapyClient2,
    bg: "bg-[#FF5300]",
    categories: ["ADHD", "Anger"],
    review:
      "A valuable tool for maintaining employee health is a comprehensive Wellness Program that tracks and validates employee well-being data. This program can be a user-friendly platform where employees can input their health goals, track progress, and identify stressors.",
  },
  {
    name: "Niraj Hirve",
    designation: "Web Desinger",
    image: therapyClient3,
    bg: "bg-[#FFDB01]",
    categories: ["Depression", "ADHD"],
    review:
      "It is a great platform that allows our organization to recognize more consistently, with an awesome rewards catalog with something for everyone. Consistent recognition becomes effortless. Easy way to enable recognition within the company, with clear communication.",
  },
  {
    name: "Suresh Jat",
    designation: "Designer",
    bg: "bg-[#05A0FD]",
    categories: ["Relationship", "OCD"],
    image: therapyClient4,
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
      {/* <CompanyLogoSlider /> */}
      <UpgradeFrontline />
    </>
  );
}

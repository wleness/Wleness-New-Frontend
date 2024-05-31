import {
  CommunityIcon1,
  CommunityIcon2,
  CommunityIcon3,
  montserrat,
} from "@/public";
import Image from "next/image";

const data = [
  {
    image: CommunityIcon1,
    desc: "IAF-certified, we meet high standards for quality and excellence.",
  },
  {
    image: CommunityIcon2,
    desc: "Startup India certified, committed to innovation and ecosystem growth.",
  },
  {
    image: CommunityIcon3,
    desc: "ISO certified, meeting international quality and regulatory standards.",
  },
];

export default function Certifications() {
  return (
    <div className="gap-4 grid xl:grid-cols-3 xl:gap-6">
      {data.map((value, i) => (
        <div key={i} className="flex gap-x-4 items-start xl:items-end">
          <div className="border-2 border-slate-500 p-1 rounded-md">
            <Image
              src={value.image}
              alt="community icon"
              className="object-contain aspect-square grayscale max-w-16 w-16"
            />
          </div>
          <p
            className={`text-slate-400 text-sm leading-4 ${montserrat.className}`}
          >
            {value.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

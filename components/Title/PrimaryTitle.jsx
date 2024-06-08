import { rubik_one } from "@public";

export default function PrimaryTitle({ text }) {
  return (
    <h2
      className={`text-white text-center mb-2 xl:text-[24px] leading-5 font-rubik-one ${rubik_one.className}`}
    >
      {text}
    </h2>
  );
}

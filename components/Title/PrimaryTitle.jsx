import { roboto_flex } from "@public";

export default function PrimaryTitle({ text }) {
  return (
    <h2
      className={`text-center lowercase mb-2 text-primary-one xl:text-[32px] leading-5 xl:leading-9 ${roboto_flex.className}`}
    >
      {text}
    </h2>
  );
}

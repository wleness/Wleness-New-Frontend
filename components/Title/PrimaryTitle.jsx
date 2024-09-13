import { roboto_flex } from "@public";

export default function PrimaryTitle({ text, theme }) {
  return (
    <h2
      className={`text-center lowercase mb-2 xl:text-[32px] leading-5 xl:leading-9 ${
        roboto_flex.className
      } ${theme ? "text-primary-one" : "text-white"}`}
    >
      {text}
    </h2>
  );
}

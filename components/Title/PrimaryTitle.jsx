import { roboto_flex } from "@public";

export default function PrimaryTitle({ text }) {
  return (
    <h2
      className={`text-center text-3xl capitalize:first-letter mb-2 text-primary-one xl:text-[32px]  xl:leading-9 ${roboto_flex.className}`}
    >
      {text}
    </h2>
  );
}

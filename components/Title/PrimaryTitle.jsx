export default function PrimaryTitle({ text }) {
  // return <h2 className={`heading-primary ${rubik.className}`}>{text}</h2>;
  return (
    <h2 className="text-white text-center mb-2 xl:text-[24px] leading-5 font-rubik-one">
      {text}
    </h2>
  );
}

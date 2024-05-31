export default function ExpertsButton({ text, isActive, switchTo }) {
  return (
    <button
      className={`px-4 py-2 font-bold md:py-4 lg:text-xl ${
        isActive
          ? " bg-primary-one"
          : " border-2 border-primary-one bg-transparent"
      }`}
      onClick={switchTo}
    >
      {/* <span className={isActive ? "text-white" : "text-black"}> */}
      <span>
        <span className={isActive ? "" : "text-white"}>Expert's </span>
        <span className={isActive ? "" : "heading-primary"}>{text}</span>
      </span>
    </button>
  );
}

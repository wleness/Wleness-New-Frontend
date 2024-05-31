import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SessionMode({ data, mode, handleModes }) {
  return (
    <label
      htmlFor={data.value}
      className="block w-full py-2.5 text-center font-semibold text-primary-one"
    >
      <input
        type="radio"
        name="duration"
        id={data.value}
        checked={mode == data.value}
        onChange={handleModes}
        className="hidden"
      />
      <FontAwesomeIcon
        icon={data.icon}
        className={`mb-1 cursor-pointer rounded-full border-2 border-primary-one p-5 text-xl ${
          mode == data.value ? " bg-primary-one text-black " : ""
        }`}
      />
      <span className="block text-center">{data.text}</span>
    </label>
  );
}

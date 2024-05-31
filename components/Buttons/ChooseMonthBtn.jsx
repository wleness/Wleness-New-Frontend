import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChooseMonthBtn({ month, icon, next, onclick }) {
  return (
    <button
      type="button"
      className="flex cursor-pointer items-center text-sm  font-medium text-gray-300 hover:text-primary-one focus:outline-none"
      onClick={onclick}
    >
      <FontAwesomeIcon icon={icon} className={next ? "order-2 ml-1" : "mr-1"} />
      <span className={`font-semibold`}>{month}</span>
    </button>
  );
}

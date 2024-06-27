import { BOOKING_CREATE_ORDER } from "@data/api";
import {
  faCalendar,
  faClock,
  faGlobe,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logo } from "@public";
import axios from "axios";
import Image from "next/image";

export default function ExpertsInfo({ date, slot, day, session }) {
  const handlePayment = () => {
    let data = {
      price: 500,
    };
    axios
      .post(BOOKING_CREATE_ORDER, data)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <span className="text-2xl font-bold text-primary-one mb-2 inline-block">
        Wleness
      </span>
      <h1 className="text-slate-400 font-medium">{session}</h1>
      <h2 className="text-white text-xl font-medium mb-4">50 Min Meeting</h2>
      <div className="text-slate-300 *:space-x-2 text-sm space-y-2">
        {date && slot && (
          <div className="flex">
            <FontAwesomeIcon icon={faCalendar} />
            <span>
              <p>
                {day}, {date}
              </p>
              <p>{slot}</p>
            </span>
          </div>
        )}

        <p>
          <FontAwesomeIcon icon={faClock} />
          <span>50 mins</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faVideo} />
          <span>Cal Video</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faGlobe} />
          <span>Asia/Kolkata</span>
        </p>
      </div>
    </div>
  );
}

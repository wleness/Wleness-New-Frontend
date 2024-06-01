import {
  faCalendar,
  faClock,
  faGlobe,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { expertClient } from "@public";
import Image from "next/image";

export default function ExpertsInfo({ date, slot, day }) {
  return (
    <div>
      <Image
        src={expertClient}
        alt="expert profile icon"
        className="rounded-full w-12 h-12 object-cover"
      />
      <h1 className="text-slate-400 font-medium">Omprakash Prajapati</h1>
      <h2 className="text-white text-xl font-medium mb-4">15 Min Meeting</h2>
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
          <span>15 mins</span>
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

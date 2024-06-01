"use client";
import ExpertsInfo from "@components/Experts/Scheduling/ExpertsInfo";
import SchedulingCalendar from "@components/Experts/Scheduling/SchedulingCalendar";
import SchedulingForm from "@components/Experts/Scheduling/SchedulingForm";
import SchedulingSlot from "@components/Experts/Scheduling/SchedulingSlot";
import { useState } from "react";

export default function page() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [day, setDay] = useState("");

  return (
    <main className="bg-primary-two pt-20">
      <div className="container mx-auto !px-0">
        <div
          className={`grid overflow-hidden h-[450px] mx-auto transition-all bg-gray-900 rounded-lg *:border-x *:border-slate-700 *:p-6 ${
            selectedDate == "" || (selectedDate != "" && selectedSlot != "")
              ? "grid-cols-[2fr_3fr] xl:w-[750px] "
              : "grid-cols-[2fr_3fr_2fr]"
          }`}
        >
          <ExpertsInfo date={selectedDate} slot={selectedSlot} day={day} />
          {[selectedDate, selectedSlot].includes("") ? (
            <>
              <SchedulingCalendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                setDay={setDay}
              />
              {selectedDate && (
                <SchedulingSlot setSelectedSlot={setSelectedSlot} />
              )}
            </>
          ) : (
            <SchedulingForm
              setUserData={setUserData}
              userData={userData}
              back={() => setSelectedSlot("")}
            />
          )}
        </div>
      </div>
    </main>
  );
}

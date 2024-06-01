"use client";
import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const SchedulingCalendar = ({ selectedDate, setSelectedDate, setDay }) => {
  const currentDate = new Date();
  const [hasPreviousMonth, setHasPreviousMonth] = useState(false);
  const [weekDay, setWeekDay] = useState(format(currentDate, "EEEE"));
  const [displayedMonth, setDisplayedMonth] = useState(currentDate);
  const [slots, setSlots] = useState([]);
  const [alert, setAlert] = useState({
    status: "",
    message: "",
  });
  const [selectedSlots, setSelectedSlots] = useState([]);

  // Function to check if a date exists in the array
  const doesDateExist = (dateToCheck) =>
    selectedSlots?.some((obj) => obj.date === dateToCheck);

  // Get the first day of the displayed month
  const firstDay = startOfMonth(displayedMonth);

  // Get the last day of the displayed month
  const lastDay = endOfMonth(displayedMonth);

  // Generate an array of dates for the displayed month
  const dates = eachDayOfInterval({ start: firstDay, end: lastDay });

  // Function to handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(format(date, "yyyy-MM-dd"));
    setDay(format(date, "EEEE"));

    // Set selected slots
    const selected_date = selectedSlots.filter((key) => key.date == date);
    if (selected_date.length > 0) {
      setSlots(selected_date[0].time_slots.split(","));
    } else {
      setSlots([]); // Set empty if slots not selected
    }
    // Set alert message
    setMessage("", "");
    // onDateSelect(format(date, "yyyy-MM-dd"));
    // setWeekDay(format(date, "EEEE"));
  };

  // Function to navigate to the next month
  const goToNextMonth = () => {
    setDisplayedMonth(addMonths(displayedMonth, 1));
    setHasPreviousMonth(true);
    setMessage("", "");
  };

  // Function to navigate to the previous month
  const goToPreviousMonth = () => {
    setDisplayedMonth(subMonths(displayedMonth, 1));

    // Disable button if previous month doesn't have previous month
    let previous_month = subMonths(displayedMonth, 2);

    if (previous_month.getMonth() < currentDate.getMonth()) {
      setHasPreviousMonth(false);
    }
  };

  const setMessage = (status, message) => {
    setAlert({
      status: status,
      message: message,
    });
  };

  // Sample appointment data (Replace this with a backend API call)
  function generateAppointmentData(startDate, endDate, timeSlots) {
    const appointmentData = [];

    const currentDate = new Date(startDate);
    const endDateObj = new Date(endDate);

    while (currentDate <= endDateObj) {
      const formattedDate = currentDate.toISOString().slice(0, 10);
      // You can generate different time slots for different days here
      const slotsForThisDay =
        currentDate.getDay() === 0 ? ["10:00 AM", "123:00 PM"] : [...timeSlots]; // Example logic
      appointmentData.push({
        date: formattedDate,
        timeSlots: [...slotsForThisDay],
      });

      // Increment the current date by one day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return appointmentData;
  }

  return (
    <div className="mb-4 lg:mb-8">
      <div className="mb-4 flex justify-between pb-2">
        <h2 className="text-center font-semibold text-gray-800">
          <span className="text-white mr-2">
            {format(displayedMonth, "MMMM")}
          </span>
          <span className="text-slate-300">
            {format(displayedMonth, "yyyy")}
          </span>
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={goToPreviousMonth}
            disabled={!hasPreviousMonth}
            className={`text-sm font-medium py-1 px-2 rounded-md  translate-x-0  text-gray-500 focus:outline-none ${
              hasPreviousMonth
                ? "cursor-pointer hover:bg-slate-700 hover:text-white"
                : "cursor-not-allowed"
            }`}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={goToNextMonth}
            className="cursor-pointer text-sm font-medium py-1 px-2 rounded-md hover:text-white translate-x-0 hover:bg-slate-700 text-gray-500 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {dates.map((date) => {
          return (
            format(date, "yyyy-MM-dd") >= format(currentDate, "yyyy-MM-dd") && (
              <button
                type="button"
                key={date}
                onClick={() => handleDateSelect(date)}
                className={`cursor-pointer ${
                  format(date, "yyyy-MM-dd") === selectedDate
                    ? "bg-white text-primary-two"
                    : "bg-gray-600 text-white"
                } ${
                  format(date, "yyyy-MM-dd") ===
                    format(currentDate, "yyyy-MM-dd") && "border-white"
                } rounded-lg text-center hover:border-white focus:outline-none border-2 border-transparent transition-all py-3.5`}
              >
                <span>{format(date, "d")}</span>
                {doesDateExist(format(date, "yyyy-MM-dd")) && (
                  <span className="ml-1 text-primary-400">
                    <FontAwesomeIcon width="5px" icon={faCircle} />
                  </span>
                )}
              </button>
            )
          );
        })}
      </div>
    </div>
  );
};

export default SchedulingCalendar;

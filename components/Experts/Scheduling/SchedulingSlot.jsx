const time_slots_15 = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
];

export default function SchedulingSlot({ setSelectedSlot }) {
  return (
    <div className="overflow-y-scroll">
      <h2 className="mb-2">
        <strong className="text-white mr-2">Mon</strong>
        <span className="text-slate-400">03</span>
      </h2>
      <div className="grid gap-y-2">
        {time_slots_15.map((value, i) => (
          <button
            key={i}
            onClick={() => setSelectedSlot(value)}
            className="outline-none py-2 border rounded-lg text-white border-slate-600 transition-all hover:border-white"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

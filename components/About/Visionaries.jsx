import {
  asissir,
  kamalsir,
  pavansir,
  pgsir,
  salonimaam,
  sreyashsir,
} from "@public";
import Image from "next/image";

const teamMembers = [
  {
    name: "Prasenjit Gupta",
    designation: "CEO",
    imageSrc: pgsir,
  },
  {
    name: "Kamal Arora",
    designation: "COO",
    imageSrc: kamalsir,
  },
  {
    name: "Saloni Gupta",
    designation: "Chief Knowledge Officer",
    imageSrc: salonimaam,
  },
  {
    name: "Pawan Kumar Singh",
    designation: "Technology Lead",
    imageSrc: pavansir,
  },
  {
    name: "Dr. Sreyash Satpathy",
    designation: "Mentor (IIM C - Alumnus)",
    imageSrc: sreyashsir,
  },
  {
    name: "Asis Ray",
    designation: "Mentor (IIT Kanpur)",
    imageSrc: asissir,
  },
];

export default function Visionaries() {
  return (
    <section className="relative overflow-x-clip bg-black py-4 xl:py-10">
      <div className="container mx-auto  text-center mb-6">
        <h1 className="subheading mx-auto  text-lg text-white sm:mb-4 sm:text-xl md:text-4xl">
          Meet the <span className="heading-primary">Visionaries</span> behind
          Wleness
        </h1>
        <p className="para">
          Wleness is guided, shaped, and overseen by a diverse collective of
          individuals united by a shared mission: providing exceptional mental
          healthcare to all in need.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-2 pb-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="mx-auto my-auto p-1 lg:w-1/2  ">
            <Image
              src={member.imageSrc}
              alt={member.name}
              className="mx-auto  h-24 w-24 rounded-full lg:h-36 lg:w-36"
            />
            <h2 className="text-xs font-bold lg:text-sm xl:text-base text-primary-one">
              {member.name}
            </h2>
            <p className="text-xs font-semibold xl:text-sm text-slate-400">
              {member.designation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

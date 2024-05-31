import Image from "next/image";

export default function CoachesHeader({ name, profession, desc, image }) {
  return (
    <>
      <header className="relative overflow-x-clip bg-primary-two lg:py-28">
        <div className="container mx-auto my-8 flex flex-col md:flex-row">
          <div className="flex items-center justify-center md:w-2/5 md:justify-start">
            <Image
              src={image}
              alt="Saloni Header"
              className="w-80 object-cover"
            />
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="subheading py-4 text-white">{name}</h2>
            <h3 className="py-4 text-lg font-bold text-primary-one">
              {profession}
            </h3>
            <p className="para text-justify text-slate-300">{desc}</p>
          </div>
        </div>
      </header>
    </>
  );
}

import AuthBackButton from "@components/Buttons/AuthBackButton";
import Link from "next/link";

export default function AuthSidebar({ title, desc, button, name }) {
  return (
    <div
      className={`grid place-items-center bg-gradient-to-bl from-yellow-300 via-yellow-500 to-primary-one py-10  ${
        name == "login"
          ? "lg:rounded-l-xl lg:order-1"
          : "lg:rounded-r-xl lg:order-2"
      }`}
    >
      <div className="px-4 text-center lg:px-8">
        <AuthBackButton />
        <h2 className="text-2xl font-extrabold lg:text-5xl">{title}</h2>
        <p className="my-4 text-lg font-semibold text-slate-800 xl:my-8">
          {desc}
        </p>
        <Link
          href={button.slug}
          className="rounded-full bg-primary-two hover:text-primary-one px-5 text-sm font-semibold text-white xl:px-12 xl:py-3 transition-all"
        >
          {button.text}
        </Link>
      </div>
    </div>
  );
}

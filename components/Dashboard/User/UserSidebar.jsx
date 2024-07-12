import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useLogout from "@utils/useLogout";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UserSidebar({ image, isMenuOpen, closeMenu }) {
  const router = useRouter();
  const { logout } = useLogout();

  return (
    <aside
      className={`fixed bottom-0 top-14 mx-auto items-center justify-center bg-teal-100 pt-20 transition-all duration-500  md:w-[20%] lg:top-0 lg:flex lg:pt-0 ${
        isMenuOpen ? " left-0" : "  invisible -left-64 lg:visible lg:left-0"
        // isMenuOpen ? " left-0" : "  left-0"
      }`}
    >
      <Link
        href="/"
        className="absolute left-5 top-5 flex h-10 w-10 cursor-pointer items-center rounded-full border-2 border-primary-300 px-2 py-2 text-primary-400 transition-colors hover:text-primary-300 lg:h-12 lg:w-12 lg:justify-center lg:p-0 lg:px-4"
      >
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="text-xl lg:text-3xl"
        />
      </Link>
      <div className="flex w-56 flex-col items-center gap-9 text-center transition-all">
        <div className="mt-3 md:mt-0">
          <Image
            src={image}
            alt="Image Alt Text"
            width={80}
            height={80}
            className="mb-4 h-20 w-20 rounded-full object-cover object-top"
          />
        </div>
        <ul className="flex flex-col gap-6">
          <li className="font-semibold">
            <Link href="/user/dashboard" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="font-semibold">
            <Link href="/user/profile" onClick={closeMenu}>
              User Profile
            </Link>
          </li>
          <li className="font-semibold">
            <Link href="/user/history" onClick={closeMenu}>
              History
            </Link>
          </li>
          <li className="font-semibold">
            <span
              onClick={() => {
                logout();
                router.push("/");
              }}
              className="cursor-pointer"
            >
              Logout
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
}

"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { avatarImage6, palmWave } from "@public";
import UserSidebar from "@components/Dashboard/User/UserSidebar";
import useToken from "@utils/useToken";
import { getLocalItem } from "@utils";

export default function UserDashboardLayout({ children }) {
  const { token } = useToken();
  const router = useRouter();

  // Navigate to login
  useEffect(() => {
    // Redirect user if loggedin
    if (token == null || token == "" || token == undefined) {
      router.push("/login", {
        state: {
          successMessage: "Please Login",
        },
      });
    }
  });

  const wleness_user = JSON.parse(getLocalItem("wleness_user"));
  useEffect(() => {
    if (wleness_user.type != "user") {
      router.push("/");
    }
  });

  // Handle Navigation bar
  const [isMenuOpen, setMenuOpen] = useState(false); // Menu Modal

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const userInfo = JSON.parse(getLocalItem("userInfo"));

  return (
    <div className="lg:flex lg:justify-end">
      <UserSidebar
        image={userInfo.image ? userInfo.image : avatarImage6}
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
      />

      <div className="mx-auto px-4 md:w-[80%] lg:mx-0 lg:px-8">
        <div className="flex items-center">
          {/* Hamburger Icon */}
          <button className="mr-3 lg:hidden">
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faClose}
                className="text-3xl text-primary-400"
                onClick={() => closeMenu()}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-2xl text-primary-400"
                onClick={() => openMenu()}
              />
            )}
          </button>
          <div className="flex text-xl lg:text-3xl">
            <h1 className="py-2 font-bold text-teal-500 lg:mb-2">
              <span>Hello </span>
              <span className="font-bold text-teal-500">
                {userInfo ? userInfo.name : "User"}
              </span>
            </h1>
            <Image
              src={palmWave}
              alt="Your Image Description"
              className="h-8 w-8 object-contain lg:h-12 lg:w-12 "
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

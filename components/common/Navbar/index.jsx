"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import { Favicon, logo } from "@public";
import useLogout from "@utils/useLogout";
import useToken from "@utils/useToken";
import { USER_PROFILE_URI } from "@data/api";
import DesktopNavbar from "./DesktopNavbar";
import JoinUs from "@components/JoinUs";
import { getLocalItem } from "@utils";

export default function Navbar() {
  const { logout } = useLogout();
  const [user, setUser] = useState(null);
  const [openJoinUs, setJoinUsModal] = useState(false);
  const { token } = useToken();

  // ======== Get user appointments and details ===========  // Redirect user if loggedin
  let wleness_user = JSON.parse(getLocalItem("wleness_user"));

  // if (token && token !== "" && token !== undefined && wleness_user != null) {
  //   let wleness_user_type = wleness_user.type;

  //   if (wleness_user_type == "user") {
  //     let url = USER_PROFILE_URI + "/" + wleness_user.username;
  //     useEffect(() => {
  //       // Make a GET request using Axios
  //       axios
  //         .get(url, {
  //           headers: {
  //             Authorization: "Bearer " + token,
  //           },
  //           params: {
  //             type: wleness_user.key,
  //           },
  //         })
  //         .then((response) => {
  //           if (response.status == 200) {
  //             setUser(response.data);
  //             localStorage.setItem("userInfo", JSON.stringify(response.data));
  //           } else {
  //             console.log(response);
  //           }
  //         })
  //         .catch((error) => {
  //           if (error.response.status == 401) {
  //             // Logout and redirect user
  //             logout();
  //             useEffect(() => {
  //               navigate("/login", {
  //                 state: {
  //                   successMessage: "Session Expired Please Login",
  //                 },
  //               });
  //             }, []);
  //             return null;
  //           } else {
  //             // Handle errors
  //             console.error("Error fetching doctor details:", error);
  //           }
  //         });
  //     });
  //   } else {
  //     let wleness_user = JSON.parse(localStorage.getItem("userInfo"));
  //     useEffect(() => {
  //       setUser({
  //         name: wleness_user.name,
  //       });
  //     }, []);
  //   }
  // }

  const toggleJoinUs = () => {
    setJoinUsModal(!openJoinUs);
  };

  return (
    <>
      {/* ========== Navigation Bar ========== */}
      <nav className="sticky left-0 right-0 top-0 z-40 bg-primary-two">
        <div className="relative grid items-center grid-cols-2 xl:grid-cols-[2fr_4fr_2fr] px-10">
          {/* Logo */}
          <div>
            <Link href={"/"}>
              <Image
                src={Favicon}
                alt="website favicon"
                className="w-10 xl:w-12"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <DesktopNavbar
            token={token}
            toggleJoinUs={toggleJoinUs}
            username={user != null ? user.name : null}
            user_type={wleness_user ? wleness_user.type : null}
          />

          {/* Mobile Menu */}
          {/* <MobileNavbar
            token={token}
            toggleJoinUs={toggleJoinUs}
            username={user != null ? user.name : null}
            user_type={wleness_user ? wleness_user.type : null}
          /> */}
        </div>
      </nav>
      <JoinUs isOpen={openJoinUs} onClose={toggleJoinUs} />
    </>
  );
}

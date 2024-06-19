"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import useToken from "@utils/useToken";
import { useRouter } from "next/navigation";
import useLogout from "@utils/useLogout";
import {
  avatarImage1,
  avatarImage2,
  avatarImage3,
  avatarImage4,
  avatarImage5,
  avatarImage6,
} from "@public";
import { USER_PROFILE_UPDATE_URI } from "@data/api";
import Image from "next/image";
import { getLocalItem, removeLocalItem, setLocalItem } from "@utils";

const genders = ["Male", "Female", "Transgender"];
const avatars = [
  avatarImage1,
  avatarImage2,
  avatarImage3,
  avatarImage4,
  avatarImage5,
  avatarImage6,
];

export default function ProfilePage() {
  const { token } = useToken();
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: userInfo.name,
    email: userInfo.email,
    phone: userInfo.phone,
    gender: "Male",
    avatar: userInfo.image,
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  // Redirect user if loggedin
  useEffect(() => {
    if (token == null || token == "" || token == undefined) {
      // Navigate to login
      router.push("/login", {
        state: {
          successMessage: "Please Login",
        },
      });
    }
  });

  const { logout } = useLogout();

  let wleness_user = JSON.parse(getLocalItem("wleness_user"));
  let userInfo = JSON.parse(getLocalItem("userInfo"));
  useEffect(() => {
    if (wleness_user.type == "expert") {
      router.push("/experts/dashboard");
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const setMessage = (status, message) => {
    setSuccessMessage({
      status: status,
      message: message,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (
      Object.values(userData).includes("") ||
      Object.values(userData).includes(null)
    ) {
      setMessage("error", "Please enter your details");
      return null;
    }

    let formData = new FormData();
    // Append form fields to the FormData object
    for (const key in userData) {
      formData.append(key, userData[key]);
    }

    // Submit post request to update profile
    axios
      .post(USER_PROFILE_UPDATE_URI, formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setMessage(response.data.status, response.data.message);
        if (response.data.status == "success") {
          removeLocalItem("userInfo");
          removeLocalItem("wleness_user");
          // Update localStorage information
          setLocalItem("userInfo", JSON.stringify(response.data));
          setLocalItem(
            "wleness_user",
            JSON.stringify({
              key: "email",
              username: userData.email,
              type: "user",
              login_type: "password",
            })
          );
        }
      })
      .catch((error) => {
        // setMessage(error.data.status, error.data.message);
        logout() ? error.response.status == 401 : "";
      });
  };

  return (
    <div className="mx-auto w-4/5 text-center lg:w-[420px]">
      <h2 className="text-center text-2xl font-semibold text-primary-400">
        Edit Your Avatar
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 pt-4">
          {avatars.map((value, i) => {
            let avatar = value.src;
            return (
              <label
                key={i}
                className="mx-auto grid w-fit cursor-pointer place-items-center rounded-full"
              >
                <Image
                  src={avatar}
                  width={90}
                  height={90}
                  className={`block w-24 rounded-full border-red-500 ${
                    userData.avatar == avatar ? " border-4" : "hover:border-4"
                  }`}
                  alt=""
                />
                <input
                  type="checkbox"
                  name="avatar"
                  id="avatar"
                  onChange={handleChange}
                  className="hidden"
                  value={avatar}
                  checked={userData.avatar == avatar}
                />
              </label>
            );
          })}
        </div>
        <div className="mb-2 space-y-3 pt-4 md:pt-10">
          <input
            className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={userData.name}
            placeholder="Enter You Username"
          />
          <input
            className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
            type="tel"
            maxLength={10}
            name="phone"
            id="phone"
            placeholder="91******78"
            onChange={handleChange}
            value={userData.phone}
          />
          <input
            className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
            type="text"
            name="email"
            id="email"
            placeholder="demo@gmail.com"
            onChange={handleChange}
            value={userData.email}
          />
          <select
            name="gender"
            id="gender"
            className="w-full rounded-lg border-2 border-slate-400 py-2"
            onChange={handleChange}
            value={userData.gender}
          >
            {genders.map((value, i) => {
              return <option key={i}>{value}</option>;
            })}
          </select>
        </div>
        <p
          className={`text-center font-semibold ${
            successMessage.status == "success"
              ? " text-green-500 "
              : " text-red-500 "
          }`}
        >
          {successMessage.message}
        </p>
        <div className="pt-4 md:pt-10">
          <button
            type="submit"
            className="btn-one !w-2/3 !rounded-lg px-6 py-3"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

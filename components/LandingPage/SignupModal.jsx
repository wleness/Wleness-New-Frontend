"use client";
import axios from "axios";
import { useState } from "react";
import { LANDINGPAGE_SIGNUP } from "@data/api";

export default function SignupModal({ isOpen, onClose }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [message, setMessage] = useState({
    status: "",
    message: "",
  });

  //   Set alert message
  const setAlert = (status, message) => {
    setMessage({
      status: status,
      message: message,
    });
  };

  //   Handle field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  //   Handle form sign up
  const handleSignup = async (e) => {
    e.preventDefault();

    // validate if data is filled
    if (Object.values(userData).includes("")) {
      setAlert("error", "Please fill all the fields");
      return null;
    }

    // Register user
    axios
      .post(LANDINGPAGE_SIGNUP, userData)
      .then((res) => {
        if (res.data.status == "success") {
          setAlert("success", "User created successfully");
          setUserData({
            name: "",
            email: "",
            phone: "",
          });
        } else {
          setAlert("error", "Please! Try Again");
        }
        window.location = "https://rzp.io/rzp/stress-management-for-trader";
        setAlert("", "");
      })
      .catch((error) => setAlert("error", "Please! Try Again."));
  };

  if (!isOpen) {
    return null;
  }
  return (
    <section className="fixed inset-0 z-50 place-items-center bg-black/40 transition-all grid">
      <div className="w-4/5 rounded-2xl bg-slate-900 p-6 transition-all lg:w-[420px] border border-primary-one-one">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-white">Sign Up</h2>
        </div>
        <form className="lg:py-2" onSubmit={handleSignup}>
          <label for="name">
            <input
              id="name"
              placeholder="Full Name *"
              className="form-input"
              type="text"
              value={userData.name}
              onChange={handleChange}
              name="name"
            />
          </label>
          <label for="phone">
            <input
              id="phone"
              placeholder="Phone Number *"
              className="form-input"
              type="text"
              value={userData.phone}
              onChange={handleChange}
              name="phone"
            />
          </label>
          <label for="email">
            <input
              id="email"
              placeholder="Email *"
              className="form-input"
              type="text"
              value={userData.email}
              onChange={handleChange}
              name="email"
            />
          </label>
          <p
            className={`mb-2 text-center font-semibold  ${
              message.status == "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message.message}
          </p>
          <div className="grid grid-cols-2 justify-center lg:flex">
            <button
              onClick={onClose}
              type="reset"
              className="mr-2 rounded-2xl border border-primary-one text-primary-one px-5 py-2 text-sm transition-all hover:text-black hover:bg-primary-one font-medium"
            >
              Close
            </button>
            <button
              type="submit"
              className="mr-2 rounded-2xl border font-medium border-primary-one bg-primary-one text-black hover:text-primary-one px-5 py-2 text-sm transition-all hover:bg-primary-one-one hover:bg-transparent  "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

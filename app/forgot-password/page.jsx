"use client";
import Footer from "@components/common/Footer";
import { FORGOT_PASSWORD_URI } from "@data/api";
import {
  faCircleArrowLeft,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bgAuth, loginLights, loginSofa } from "@public";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState(null);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const setMessage = (status, message) => {
    setSuccessMessage({
      status: status,
      message: message,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email == null || email == "") {
      setMessage("error", "Please Enter Your Email");
      setLoading(false);
      return null;
    }
    setLoading(true);
    let formData = new FormData();
    formData.append("email", email);

    axios
      .post(FORGOT_PASSWORD_URI, formData)
      .then((response) => {
        if (response.status == 200) {
          setMessage(response.data.status, response.data.message);
          setLoading(false);
          setEmail("");
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center md:flex-row md:items-stretch bg-primary-two">
        <aside className="hidden flex-col items-center justify-between md:flex md:w-1/2">
          <div>
            <div className="mx-auto w-96 pt-28 lg:w-[460px]">
              <h2 className="mb-4 text-3xl font-semibold text-primary-one xl:text-4xl">
                Welcome to Wleness
              </h2>
              <p className="font-medium lg:text-lg text-slate-400">
                Mental health is vital—it&apos;s the foundation of our
                well-being, impacting relationships, productivity, and
                life&apos;s challenges. Recognizing its importance fosters a
                stigma-free society that supports happier, healthier lives for
                all.
              </p>
            </div>
            <Image
              src={loginSofa}
              alt=""
              className="block w-[620px] object-cover"
            />
          </div>
        </aside>

        <Link
          href="/"
          className="absolute left-1/2 top-5 flex -translate-x-1/2 cursor-pointer items-center rounded-full border-2 border-primary-one px-2 py-2 text-xl text-primary-one transition-colors hover:text-primary-one md:left-10 md:translate-x-0 lg:h-12 lg:w-12 lg:justify-center lg:p-0 lg:px-4 lg:text-xl"
        >
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="text-2xl lg:text-3xl"
          />
        </Link>

        <div className="flex items-center justify-center md:w-1/2 md:px-4">
          <div className="w-80 rounded-xl bg-slate-900 p-6 shadow-md shadow-primary-one sm:w-[400px] lg:py-10">
            <div className="p-4">
              <div className="text-center">
                <h2 className="block text-2xl font-bold text-white">
                  Forgot password?
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  <span className="font-semibold">
                    Remember your password?{" "}
                  </span>
                  <Link
                    href="/login"
                    className="font-bold text-primary-one decoration-2 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </div>
              <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-y-4">
                    <div>
                      <span className="mb-1 block font-semibold text-slate-500">
                        Email address
                      </span>
                      <label htmlFor="email" className="auth-form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="auth-form-input pl-4"
                          placeholder="Email Address"
                          value={email}
                          onChange={handleChange} // Handle email input change
                        />
                      </label>
                      <p
                        className={`text-center font-semibold ${
                          successMessage.status == "success"
                            ? " text-green-500 "
                            : " text-red-500 "
                        }`}
                      >
                        {successMessage.message}
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-teal-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 "
                    >
                      {loading && (
                        <FontAwesomeIcon
                          icon={faSpinner}
                          className="animate-spin block text-lg"
                        />
                      )}
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={loginLights}
          alt=""
          className="absolute left-10 top-0 block w-14 -translate-x-1/2 object-cover lg:left-1/2 lg:w-36"
        />
        <Image
          src={bgAuth}
          alt=""
          className="absolute right-0 -z-10 h-full w-full"
        />
      </main>
      <Footer />
    </>
  );
}

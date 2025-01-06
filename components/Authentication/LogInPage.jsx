"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useToken from "@utils/useToken";
import AuthLayout from "@components/Authentication/AuthLayout";
import AuthHeading from "@components/Authentication/AuthHeading";
import { EXPERTS_LOGIN, PRICING } from "@data/urls";
import useLogin from "@app/login/useLogin";

function LogInPageComp() {
  const router = useRouter();
  const { token, setToken } = useToken();

  const searchParams = useSearchParams();
  const booking = searchParams.get("booking");

  // Redirect user if loggedin
  useEffect(() => {
    if (token && token !== "" && token !== undefined && token !== "{}") {
      if (booking) {
        router.push(PRICING);
      } else {
        router.push("/");
      }
    }
  },[]);

  const {
    successMessage,
    formInfo,
    handleSubmit,
    handleChange,
    handleGoogleSignIn,
    handleFacebookSignIn,
    setMessages,
  } = useLogin({ setToken });

  // Handle Redirect Messsages
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const paramValue = urlParams.get("source");

      if (paramValue == "passwordReset") {
        setMessages("success", "Password reset successfully! Please Login");
      }
    }
  }, []);

  return (
    <AuthLayout name={"login"}>
      <div className="text-center">
        <AuthHeading
          title="Sign in to Wleness"
          google={handleGoogleSignIn}
          facebook={handleFacebookSignIn}
        />

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mx-auto mb-4 lg:w-96">
          {successMessage.status && (
            <p
              className={`mb-3 text-center font-semibold ${
                successMessage.status == "success"
                  ? " text-green-500 "
                  : " text-red-500 "
              }`}
            >
              {successMessage.message}
            </p>
          )}
          <div className="auth-form-group">
            <label htmlFor="username">
              <FontAwesomeIcon icon={faUser} className="px-4 text-slate-400" />
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Email or Mobile Number"
              value={formInfo.username}
              onChange={handleChange}
              className="auth-form-input"
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock} className="px-4 text-slate-400" />
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formInfo.password}
              onChange={handleChange}
              className="auth-form-input"
            />
          </div>
          <div className="mb-6 text-right">
            <Link
              href="/forgot-password"
              className="inline-block text-sm font-semibold text-primary-one"
            >
              Forgot Password?
            </Link>
          </div>
          <button className="rounded-full border-2 border-primary-one px-5 py-2 text-sm font-bold text-primary-one xl:px-12 xl:py-3">
            SIGN IN
          </button>
        </form>
        <div className="font-semibold text-slate-400">
          <Link
            href={EXPERTS_LOGIN}
            className="inline-block text-primary-one underline underline-offset-2"
          >
            Login
          </Link>
          <span> as an Expert</span>
        </div>
      </div>
    </AuthLayout>
  );
}

export default function LogInPage() {
  return (
    <Suspense>
      <LogInPageComp />
    </Suspense>
  );
}

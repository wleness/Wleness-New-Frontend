"use client";
import { useEffect, useState } from "react";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EXPERTS_LOGIN_URI } from "@data/api";
import useToken from "@utils/useToken";
import AuthLayout from "@components/Authentication/AuthLayout";
import { setLocalItem } from "@utils";

export default function ExpertsLoginPage() {
  const { token, setToken } = useToken();
  const router = useRouter();

  // Redirect user if loggedin
  useEffect(() => {
    if (token && token !== "" && token !== undefined) {
      // Navigate to login
      router.push("/experts/dashboard");
    }
  });

  const [formInfo, setFormData] = useState({
    user_id: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  // Update form value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formInfo, [name]: value });
  };

  // Set alert message
  const setMessages = (status, msg) => {
    setSuccessMessage({
      status: status,
      message: msg,
    });
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if form is filled
    if (formInfo["user_id"] && formInfo["password"]) {
      // Append form fields to the FormData object
      let formData = new FormData();
      for (const key in formInfo) {
        formData.append(key, formInfo[key].trim());
      }

      axios
        .post(EXPERTS_LOGIN_URI, formData)
        .then((response) => {
          // Empty form after successfully sending data
          if (response.data.status === "success") {
            setFormData({
              user_id: "",
              password: "",
            });

            setToken(response.data.access_token);
            setLocalItem(
              "wleness_user",
              JSON.stringify({
                user_id: formInfo["user_id"],
                type: "expert",
              })
            );
            setLocalItem("wleness_user_type", "expert");

            router.push("/experts/dashboard");
          }
          setMessages(response.data.status, response.data.message);
        })
        .catch((error) => {
          console.error("Error sending data:", error);
          setMessages("error", "Internal Server Error! Please try again later"); // set error message
        });
    } else {
      setMessages("error", "Please fill in your details properly!"); // set error message
    }
  };

  return (
    <AuthLayout name={"login"}>
      <div>
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-extrabold text-primary-one lg:text-5xl">
            Experts Login
          </h2>
          <span className="mb-6 inline-block font-semibold text-slate-400">
            or use your id for login
          </span>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-4 lg:w-96 text-center"
        >
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
              id="user_id"
              maxLength={10}
              name="user_id"
              placeholder="User Id"
              value={formInfo.user_id}
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
            LOGIN
          </button>
        </form>

        <div className="font-semibold text-center text-slate-500">
          <Link
            href="/login"
            className="inline-block text-primary-one underline underline-offset-2"
          >
            Login
          </Link>
          <span> as a User</span>
        </div>
      </div>
    </AuthLayout>
  );
}

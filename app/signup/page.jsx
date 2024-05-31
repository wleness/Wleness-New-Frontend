"use client";
import {
  faEnvelope,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import {
  GOOGLE_SIGNUP_URI,
  SIGNUP_USER_URI,
  VERIFY_SIGNUP_OTP,
} from "@data/api";
import { useEffect, useState } from "react";
import useToken from "@utils/useToken";
// Components
import AuthHeading from "@components/Authentication/AuthHeading";
import AuthLayout from "@components/Authentication/AuthLayout";
import OtpModal from "@components/Modals/OtpModal";
import { signInWithPopup } from "firebase/auth";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "@components/Authentication/FirebaseConfig";

export default function page() {
  const router = useRouter();
  const { token, setToken } = useToken();

  // Redirect user if loggedin
  useEffect(() => {
    if (token && token !== "" && token !== undefined) {
      // Navigate to login
      router.push("/");
    }
  }, []);

  const [otp, setOTP] = useState(null);
  const [OTPModal, setOTPModal] = useState(false);
  const [otpAlert, setOTPAlert] = useState("");
  const [newToken, setNewToken] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const [formInfo, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
  const [user, setUser] = useState(null);

  // ===================Google Login ==========================//
  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        let user = result.user;
        user.login_type = "google";

        // Send user data to the backend
        sendUserDataToBackend(user, GOOGLE_SIGNUP_URI);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  // ===================Facebook Login ==========================//
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider) // Use the Facebook provider
      .then((result) => {
        let user = result.user;
        user.login_type = "facebook";

        // Send user data to the backend
        sendUserDataToBackend(user, GOOGLE_SIGNUP_URI);
      })
      .catch((error) => {
        console.error("Error signing in with Facebook:", error);
      });
  };

  // Function to send user data to the backend
  const sendUserDataToBackend = async (user, url) => {
    let data = {
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      login_type: user.login_type,
      access_token: user.accessToken,
    };

    try {
      const response = await axios.post(url, data);
      if (response.data.status == "success") {
        // Set login token
        setToken(response.data.access_token);
        localStorage.setItem(
          "wleness_user",
          JSON.stringify({
            key: "email",
            username: data.email,
            type: "user",
            login_type: data.login_type,
          })
        );
        router.push("/");
      } else {
        setMessages(response.data.status, response.data.message);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setMessages("error", "Internal Server Error! Please try again later"); // Set error message
    }
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
    if (
      formInfo["name"] &&
      formInfo["phone"] &&
      formInfo["email"] &&
      formInfo["password"]
    ) {
      // Append form fields to the FormData object
      let formData = new FormData();
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }

      await axios
        .post(SIGNUP_USER_URI, formData)
        .then((response) => {
          // Empty form after successfully sending data
          if (response.data.status == "success") {
            setEmail(formInfo["email"]);
            localStorage.setItem(
              "wleness_user",
              JSON.stringify({
                key: "email",
                username: formInfo["email"],
                type: "user",
                login_type: "password",
              })
            );
            // Empty Variable if success
            setFormData({
              name: "",
              phone: "",
              email: "",
              password: "",
            });
            setNewToken(response.data.access_token);
            setOTPModal(true);
          } else {
            setMessages(response.data.status, response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error sending data:", error);
          setMessages("error", "Internal Server Error! Please try again later"); // Set error message
        });
    } else {
      setMessages("error", "Please fill in your details properly!"); // Set error message
    }
  };

  // Handle OTP Verification
  const handleVerifyOTP = (e) => {
    e.preventDefault();

    if (otp == null) {
      setOTPAlert("Please Enter Your OTP");
    } else {
      let otpBody = {
        otp: otp,
        email: email,
      };

      axios
        .post(VERIFY_SIGNUP_OTP, otpBody)
        .then((response) => {
          if (response.data.status == "success") {
            // Set login token after OTP Verification
            setToken(newToken);
            localStorage.setItem("phone", phone);
            router.push("/");
          } else {
            setOTPAlert(response.data.message);
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <AuthLayout name={"signup"}>
      <div className="text-center">
        <AuthHeading
          title="Create an Account"
          google={handleGoogleSignUp}
          facebook={handleFacebookSignIn}
        />

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mx-auto lg:w-96">
          {successMessage.status == "" ? (
            location.state &&
            location.state.successMessage && (
              <p className="mb-3 text-center font-semibold text-red-500">
                {location.state.successMessage}
              </p>
            )
          ) : (
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
          <div className="mb-4 flex items-center rounded-md bg-slate-100">
            <label htmlFor="name">
              <FontAwesomeIcon icon={faUser} className="px-4 text-slate-400" />
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formInfo.name}
              onChange={handleChange}
              className="w-full bg-transparent py-2.5 pr-4 outline-none xl:py-3.5"
            />
          </div>
          <div className="mb-4 flex items-center rounded-md bg-slate-100">
            <label htmlFor="phone">
              <FontAwesomeIcon icon={faPhone} className="px-4 text-slate-400" />
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Mobile"
              value={formInfo.phone}
              onChange={handleChange}
              className="w-full bg-transparent py-2.5 pr-4 outline-none xl:py-3.5"
            />
          </div>
          <div className="mb-4 flex items-center rounded-md bg-slate-100">
            <label htmlFor="email">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="px-4 text-slate-400"
              />
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formInfo.email}
              onChange={handleChange}
              className="w-full bg-transparent py-2.5 pr-4 outline-none xl:py-3.5"
            />
          </div>
          <div className="mb-6 flex items-center rounded-md bg-slate-100">
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
              className="w-full bg-transparent py-2.5 pr-4 outline-none xl:py-3.5"
            />
          </div>
          <button className="rounded-full border-2 border-primary-one px-5 py-2 text-sm font-bold text-primary-one xl:px-12 xl:py-3">
            SIGN UP
          </button>
        </form>
      </div>
      <OtpModal
        isOpen={OTPModal}
        msg={otpAlert}
        submit={handleVerifyOTP}
        otp={otp}
        setOTP={setOTP}
        email={email}
      />
    </AuthLayout>
  );
}

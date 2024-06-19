import {
  auth,
  facebookProvider,
  googleProvider,
} from "@components/Authentication/FirebaseConfig";
import { GOOGLE_LOGIN_URI, LOGIN_USER_URI } from "@data/api";
import { setLocalItem } from "@utils";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const validateMobileNumberOrEmail = (username) => {
  // Regular expression for a valid email address
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Regular expression for a valid mobile number
  const mobileRegex = /^[0-9]{10}$/;

  if (emailRegex.test(username)) {
    return "email";
  } else if (mobileRegex.test(username)) {
    return "phone";
  } else {
    return "invalid";
  }
};

export default function useLogin({ setToken }) {
  const router = useRouter();
  const [formInfo, setFormData] = useState({
    username: "",
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

  const VerifyLoginData = (data, url, login_type) => {
    // Append form fields to the FormData object
    let request_data = {
      email: data.email,
      access_token: data.accessToken,
    };

    axios
      .post(url, request_data)
      .then((response) => {
        // Empty form after successfully sending data
        if (response.data.status === "success") {
          setToken(response.data.access_token);
          setLocalItem(
            "wleness_user",
            JSON.stringify({
              key: "email",
              username: data.email,
              type: "user",
              login_type: login_type,
            })
          );
          router.push("/");
        }
        setMessages(response.data.status, response.data.message);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        setMessages("error", "Internal Server Error! Please try again later"); // set error message
      });
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if form is filled
    if (formInfo["username"] && formInfo["password"]) {
      let userType = validateMobileNumberOrEmail(formInfo["username"]);
      if (userType == "invalid") {
        setMessages("error", "Please enter email or phone"); // set success message
        return null;
      }

      // Append form fields to the FormData object
      let formData = new FormData();
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }
      formData.append("value_type", userType);

      // Send user data to the backend
      await axios
        .post(LOGIN_USER_URI, formData)
        .then((response) => {
          if (response.data.status === "success") {
            setToken(response.data.access_token);
            setLocalItem(
              "wleness_user",
              JSON.stringify({
                key: userType,
                username: formInfo["username"],
                type: "user",
                login_type: "password",
              })
            );
            setFormData({
              username: "",
              password: "",
            });

            router.push("/");
          } else {
            setMessages(response.data.status, response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error sending data:", error);
          setMessages("error", "Internal Server Error! Please try again later"); // set error message
        });
    } else {
      setMessages("error", "Please fill in your details properly!"); // set error message
    }
  };

  // =================== Google Login ==========================//
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        VerifyLoginData(user, GOOGLE_LOGIN_URI, "google");
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  // ===================Facebook Login ==========================//
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider) // Use the Facebook provider
      .then((result) => {
        const user = result.user;
        VerifyLoginData(user, GOOGLE_LOGIN_URI, "facebook");
      })
      .catch((error) => {
        console.error("Error signing in with Facebook:", error);
      });
  };

  return {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    handleGoogleSignIn: handleGoogleSignIn,
    handleFacebookSignIn: handleFacebookSignIn,
    successMessage: successMessage,
    formInfo: formInfo,
  };
}

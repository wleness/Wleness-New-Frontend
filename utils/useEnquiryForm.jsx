"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { USER_PROFILE_URI } from "../data/api";
import { getLocalItem } from "@utils";
import useToken from "./useToken";
import useLogout from "./useLogout";

export default function useEnquiryForm() {
  const [enquiryForm, setEnquiryForm] = useState(false);

  // Toggle Enquiry Form form
  const toggleForm = () => {
    setEnquiryForm(!enquiryForm);
  };

  return {
    enquiryForm,
    toggleForm,
  };
}

// Get User information
export function getUserInfo() {
  const { token } = useToken();
  const [userData, setUserData] = useState(null);
  const { logout } = useLogout();

  useEffect(() => {
    if (token && token !== "" && token !== undefined && token != {}) {
      let wleness_user = JSON.parse(getLocalItem("wleness_user"));
      let url = USER_PROFILE_URI + "/" + wleness_user.username;

      // Make a GET request using Axios
      axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + token,
          },
          params: {
            type: wleness_user.key,
          },
        })
        .then((response) => {
          if (response.status == 200) {
            setUserData(response.data);
          }
        })
        .catch((error) => {
          // Handle errors
          // Logout if session expired
          logout();
          console.error("Error fetching doctor details:", error);
        });
    }
  }, [token]);

  return { userData: userData };
}

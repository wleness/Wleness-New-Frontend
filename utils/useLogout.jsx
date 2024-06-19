import axios from "axios";

import useToken from "./useToken";
import { LOGOUT_USER_URI } from "@data/api";
import { getLocalItem, removeLocalItem } from "@utils";

function useLogout() {
  const { removeToken } = useToken();
  const wleness_user = JSON.parse(getLocalItem("wleness_user"));

  const logMeOut = async () => {
    const response = await axios.post(LOGOUT_USER_URI);
    if (response.data.status === "success") {
      // Clear user data from local storage
      removeToken();
      if (wleness_user.type == "expert") {
        removeLocalItem("wleness_experts_id");
      } else {
        removeLocalItem("phone");
        removeLocalItem("email");
      }
      removeLocalItem("userInfo");
      removeLocalItem("wleness_user");
      removeLocalItem("wleness_user_type");
      removeLocalItem("username");
      removeLocalItem("login_type");
      window.location = "/";
      // navigate("/login");
    }
  };

  return {
    logout: logMeOut,
  };
}

export default useLogout;

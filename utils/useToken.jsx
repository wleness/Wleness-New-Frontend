"use client";
import { getLocalItem, removeLocalItem, setLocalItem } from "@utils";
import { useState } from "react";

function useToken() {
  function getToken() {
    const userToken = getLocalItem("token");
    return userToken && userToken;
  }

  const [token, setToken] = useState(getToken());

  function saveToken(userToken) {
    setLocalItem("token", userToken);
    setToken(userToken);
  }

  function removeToken() {
    removeLocalItem("token");
    setToken(null);
  }

  return {
    setToken: saveToken,
    token,
    removeToken,
  };
}

export default useToken;

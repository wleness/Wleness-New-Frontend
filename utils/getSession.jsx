import { GET_SESSION_DETAILS } from "@data/api";
import axios from "axios";
import { useEffect, useState } from "react";

export default function getSession(id) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    axios
      .get(GET_SESSION_DETAILS, { params: { id: id } })
      .then((res) => {
        setSession(res.data);
      })
      .catch((error) => console.log(error));
  }, [setSession, id]);

  return session;
}

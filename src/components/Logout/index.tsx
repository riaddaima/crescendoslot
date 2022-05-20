import React from "react";
import { useCookies } from "react-cookie";
import { googleLogout } from "@react-oauth/google";

const Logout = () => {

  const [, , removeCookies] = useCookies(['jwt-token']);

  const handleLogout = () => {
    removeCookies('jwt-token');
    googleLogout();
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
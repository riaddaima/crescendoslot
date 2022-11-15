import React from "react";
import { useCookies } from "react-cookie";
import { googleLogout } from "@react-oauth/google";
import "./logout.css"

const Logout = () => {

  const [, , removeCookies] = useCookies(['jwt-token']);

  const handleLogout = () => {
    removeCookies('jwt-token');
    googleLogout();
  }
  return (
    <div>
      <a href="/login" onClick={handleLogout}>Logout</a>
    </div>
  );
}

export default Logout;
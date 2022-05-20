import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import Logout from "../../components/Logout";

const Home = () => {
  const [cookies] = useCookies(['jwt-token']);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    console.log(cookies["jwt-token"]);
    setProfile(jwtDecode(cookies["jwt-token"]));
  }, [cookies]);

  return (
    <div>
      <h1>Welcome Home, {profile.name}</h1>
      <p>{profile.email}</p>
      <Logout />
    </div>
  );
}

export default Home;
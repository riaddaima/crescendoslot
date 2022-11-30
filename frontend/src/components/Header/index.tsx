import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import Logout from "../Logout";
import './header.css';
import { Profile } from "../../interfaces/Profile";

const Header = () => {
  const [cookies] = useCookies(['jwt-token']);
  const [profile, setProfile] = useState<Profile>({
    email: '',
    name: '',
    picture: '',
    iat: 0,
    exp: 0,
  });

  useEffect(() => {
    setProfile(jwtDecode(cookies["jwt-token"]));
  }, [cookies]);
  return (
    <div>
      <ul>
        <li><Avatar src={profile.picture}/></li>
        <li>{profile.email}</li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  )
}

export default Header;
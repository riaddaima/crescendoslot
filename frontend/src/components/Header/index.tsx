import React from "react";
import Avatar from '@mui/material/Avatar';
import Logout from "../Logout";
import './header.css';
import { useAppSelector } from "../../app/hooks";
import { profileSelector } from "../Profile/reducer/selector";

const Header = () => {
  const profile = useAppSelector(profileSelector);
  return (
    <div className="header">
      <ul>
        <li><Avatar src={profile.avatar}/></li>
        <li>{profile.email}</li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  )
}

export default Header;
import React from "react";
import Avatar from '@mui/material/Avatar';
import Logout from "../Logout";
import './header.css';
// import the sidebar component
import { useAppSelector } from "../../app/hooks";
import { profileSelector } from "../Profile/reducer/selector";
import Sidebar from '../../components/Sidebar/Sidebar';

const Header = () => {
  const profile = useAppSelector(profileSelector);
  return (
    <div className="header">
      <ul>
        <li><Sidebar /></li>
        <li><Avatar src={profile.avatar}/></li>
        <li className="email">{profile.email}</li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  )
}

export default Header;
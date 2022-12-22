import React from "react";
import { googleLogout } from "@react-oauth/google";
import "./logout.css"
import { useAppDispatch } from "../../app/hooks";
import { slice as profileApplier } from '../../components/Profile/reducer';
import { initialState as profileInitialState } from "../Profile/reducer/state";

const Logout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(profileApplier.actions.setProfile(profileInitialState));
    googleLogout();
  }
  return (
    <div>
      <a href="/login" onClick={handleLogout}>Logout</a>
    </div>
  );
}

export default Logout;
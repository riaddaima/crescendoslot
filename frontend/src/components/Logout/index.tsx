import React from "react";
import { useCookies } from "react-cookie";
import { googleLogout } from "@react-oauth/google";
import "./logout.css"
import { useAppDispatch } from "../../app/hooks";
import { slice as profileApplier } from '../../components/Profile/reducer';
import { initialState as profileInitialState } from "../Profile/reducer/state";

const Logout = () => {
  const dispatch = useAppDispatch();
  const [, , removeCookies] = useCookies(['jwt-token']);

  const handleLogout = () => {
    dispatch(profileApplier.actions.setProfile(profileInitialState));
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
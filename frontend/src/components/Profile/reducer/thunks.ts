import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../../../interfaces/Profile";
import { ProfileAPI } from "../../../models/Profile";

export const profileGet = createAsyncThunk(
  "profile/get",
  (userid: string) => {
    return ProfileAPI.getProfile(userid);
  }
);

export const profileUpdate = createAsyncThunk(
  "profile/update",
  (profile: Profile) => {
    return ProfileAPI.updateProfile(profile);
  }
);
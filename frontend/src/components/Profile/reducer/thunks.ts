import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../../../interfaces/Profile";
import { ProfileAPI } from "../../../models/Profile";

export const profileGet = createAsyncThunk(
  "profile/get",
  ProfileAPI.getProfile
);

export const profileUpdate = createAsyncThunk(
  "profile/update",
  (profile: Profile) => {
    return ProfileAPI.updateProfile(profile);
  }
);

export const profileCreate = createAsyncThunk(
  "profile/create",
  (profile: Profile) => {
    return ProfileAPI.createProfile(profile);
  }
);
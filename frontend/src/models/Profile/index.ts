import API from "../../helpers/API";
import { Profile } from "../../interfaces/Profile";
import { ProfileResponse, ProfileGetReponse } from "./request-helper";

const PROFILE_ENDPOINT = "/profile";
export class ProfileAPI {

  static getProfile(): Promise<ProfileResponse> {
    return API.get(PROFILE_ENDPOINT);
  }

  static createProfile(profile: Profile): Promise<ProfileResponse> {
    return API.post(PROFILE_ENDPOINT, profile);
  }

  static updateProfile(profile: Profile): Promise<ProfileResponse> {
    return API.put(PROFILE_ENDPOINT, profile);
  }
} 

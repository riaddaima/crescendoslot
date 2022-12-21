import API from "../../helpers/API";
import { ProfileResponse } from "./request-helper";

const PROFILE_ENDPOINT = "/profile";
export class ProfileAPI {

  static getProfile(userid: string): Promise<ProfileResponse> {
    return API.get(PROFILE_ENDPOINT + "/" + userid);
  }

  static updateProfile(profile: ProfileResponse): Promise<ProfileResponse> {
    return API.put(PROFILE_ENDPOINT, profile);
  }
} 

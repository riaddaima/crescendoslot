import API from "../../helpers/API";
import { LoginResponse } from "./request-helper";

const LOGIN_ENDPOINT = "/login";
export class LoginAPI {

  static login(token: string | undefined): Promise<LoginResponse> {
    return API.post(LOGIN_ENDPOINT, {
      token
    });
    // return new Promise((resolve, reject) => {
    //   if (token) resolve(token);
    //   reject('[LOGIN] Could not retrieve a valid token.')
    // })
  }
}

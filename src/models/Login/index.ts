// import API from '../../helpers/API';
// import {
//   LoginPOSTRequest,
// } from './request-helper';

// const LOGIN_ENDPOINT = '/user/login';
export class LoginAPI {

  static login(token: string | undefined): Promise<string> {
    return new Promise((resolve, reject) => {
      if (token) resolve(token);
      reject('[LOGIN] Could not retrieve a valid token.')
    })
    // return API.post(
    //   LOGIN_ENDPOINT,
    //   token,
    // );
  }
}

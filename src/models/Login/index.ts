export class LoginAPI {

  static login(token: string | undefined): Promise<string> {
    return new Promise((resolve, reject) => {
      if (token) resolve(token);
      reject('[LOGIN] Could not retrieve a valid token.')
    })
  }
}

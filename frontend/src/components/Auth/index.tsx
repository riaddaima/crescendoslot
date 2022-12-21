import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { CredentialResponse } from '../../interfaces/CredentialResponse';
import './login.css';
import { useAppDispatch } from "../../app/hooks";
import { authLogin } from './reducer/thunks';

/**
 * @riaddaima
 * https://developers.google.com/identity/protocols/oauth2/web-server#creatingcred
 * https://console.cloud.google.com/apis/credentials
 */

const clientId = import.meta.env.VITE_CLIENT_ID as string;

const Login = () => {

  const dispatch = useAppDispatch();

  const onSuccess = (res: CredentialResponse) => {
    const { credential } = res;
    if (credential) {
      console.log(credential);
      dispatch(authLogin(credential));

      // {
      //   "iss": "https://accounts.google.com",
      //   "nbf": 1670700519,
      //   "aud": "243013330510-67hud4rao800p7me4djktehmlgmtjj0u.apps.googleusercontent.com",
      //   "sub": "105767007048062418413",
      //   "email": "riaddaima1@gmail.com",
      //   "email_verified": true,
      //   "azp": "243013330510-67hud4rao800p7me4djktehmlgmtjj0u.apps.googleusercontent.com",
      //   "name": "riad daima",
      //   "picture": "https://lh3.googleusercontent.com/a/AEdFTp5Qf8aIlwJGHRU5j1aiqQzRyJUCtfC86bb4AdmbCQ=s96-c",
      //   "given_name": "riad",
      //   "family_name": "daima",
      //   "iat": 1670700819,
      //   "exp": 1670704419,
      //   "jti": "a08cadcb2b4d80c37099960ff1b0841a97dd1f9b"
      // }
    }
  };

  const onError = () => {
    console.error("Error during login.");
  };

  return (
    <div className="login">
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
          useOneTap
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default Login;
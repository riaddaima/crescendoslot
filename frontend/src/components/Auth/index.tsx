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
      dispatch(authLogin(credential));
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
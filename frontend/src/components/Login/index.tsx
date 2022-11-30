import React from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { CredentialResponse } from '../../interfaces/CredentialResponse';
import './login.css';
import { useAppDispatch } from "../../app/hooks";
import { loginUser } from './reducer/thunks';

/**
 * @riaddaima
 * https://developers.google.com/identity/protocols/oauth2/web-server#creatingcred
 * https://console.cloud.google.com/apis/credentials
 */

const clientId = process.env.REACT_APP_CLIENT_ID as string;

const Login = () => {

  const dispatch = useAppDispatch();
  const history = useHistory();
  const [, setCookie] = useCookies(['jwt-token']);

  const redirectToHome = () => history.push('/');

  const onSuccess = (res: CredentialResponse) => {
    const { credential } = res;
    dispatch(loginUser(credential));
    setCookie('jwt-token', credential);
    redirectToHome();
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
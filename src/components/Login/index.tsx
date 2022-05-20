import React from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { CredentialResponse } from '../../interfaces/CredentialResponse';

const clientId = process.env.REACT_APP_CLIENT_ID as string;

const Login = () => {

  const history = useHistory();
  const [, setCookie] = useCookies(['jwt-token']);

  const redirectToHome = () => history.push('/');

  const onSuccess = (res: CredentialResponse) => {
    console.log('Login Success: currentUser:', res);
    const { credential } = res;
    setCookie('jwt-token', credential);
    redirectToHome();
  };

  const onError = () => {
    console.error("Error during login.");
  };

  return (
    <div>
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
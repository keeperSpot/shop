import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { googleAuthenticate, logout as logoutAction } from 'common/actions/auth';

import { GOOGLE_SIGNIN_WEB_CLIENT_ID } from 'common/secrets';

export const useGoogleAuthentication = (autoLoad = true) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [inProgress, setInProgress] = useState(!isAuthenticated);
  const dispatch = useDispatch();

  const onLoginSuccess = async (info) => {
    if (!isAuthenticated)
      dispatch(googleAuthenticate({ googleId: info.googleId, token: info.tokenId }));

    setInProgress(false);
  };

  const onLoginFail = async (reason) => {
    dispatch(logoutAction());
    setInProgress(false);
  };

  const onAutoLoadFinished = () => {
    setInProgress(false);
  };

  const { signIn: googleSignIn, loaded: signInLoaded } = useGoogleLogin({
    clientId: GOOGLE_SIGNIN_WEB_CLIENT_ID,
    responseType: 'id_token',
    accessType: 'offline',
    onSuccess: onLoginSuccess,
    onFailure: onLoginFail,
    onAutoLoadFinished,
    fetchBasicProfile: autoLoad,
    // autoLoad,
    isSignedIn: true,
  });

  const onLogoutSuccess = async () => {
    setInProgress(false);
  };

  const onLogoutFailure = async () => {
    setInProgress(false);
  };

  const { signOut: googleSignOut, loaded: signOutLoaded } = useGoogleLogout({
    clientId: GOOGLE_SIGNIN_WEB_CLIENT_ID,
    responseType: 'id_token',
    accessType: 'offline',
    onLogoutSuccess,
    onFailure: onLogoutFailure,
    onAutoLoadFinished,
  });

  const signIn = async () => {
    if (!isAuthenticated) {
      setInProgress(true);
      await googleSignIn();
    }
  };

  const signOut = async () => {
    setInProgress(true);
    dispatch(logoutAction(googleSignOut));
  };

  const getCurrentUser = async () => {};

  return {
    signIn,
    signOut,
    getCurrentUser,
    inProgress: inProgress || !signInLoaded || !signOutLoaded,
  };
};

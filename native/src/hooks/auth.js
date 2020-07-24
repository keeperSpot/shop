import { useEffect, useState } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { GOOGLE_SIGNIN_WEB_CLIENT_ID } from 'common/secrets';
import { useDispatch, useSelector } from 'react-redux';
import { googleAuthenticate, logout as logoutAction } from 'common/actions/auth';

GoogleSignin.configure({
  webClientId: GOOGLE_SIGNIN_WEB_CLIENT_ID,
  offlineAccess: true,
});

export const useGoogleAuthentication = (autoLoad = true) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [inProgress, setInProgress] = useState(true);
  const dispatch = useDispatch();

  const authenticate = async (info) => {
    dispatch(googleAuthenticate({ googleId: info.user.id, token: info.idToken }));
  };

  const signIn = async () => {
    if (!isAuthenticated)
      try {
        setInProgress(true);
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const info = await GoogleSignin.signIn();

        await authenticate(info);
        setInProgress(false);
      } catch (error) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          case statusCodes.IN_PROGRESS:
          default:
            setInProgress(false);
        }
      }
  };

  const signOut = async () => {
    setInProgress(true);
    dispatch(logoutAction(GoogleSignin.signOut));
    setInProgress(false);
  };

  const getCurrentUser = async () => {
    try {
      setInProgress(true);
      if (!isAuthenticated) await authenticate(await GoogleSignin.signInSilently());
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_REQUIRED:
          if (isAuthenticated) await signOut();
          break;
        default:
        // pass
      }
    }

    setInProgress(false);
  };

  useEffect(() => {
    if (autoLoad) getCurrentUser().then();
  }, []);

  return {
    inProgress,
    signIn,
    signOut,
    getCurrentUser,
  };
};

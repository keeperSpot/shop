import { signInAPI, getUserMetaAPI, signOutAPI } from '../api/auth';
import { Notify, Storage } from '../helpers/shared';

import { USER_AUTHENTICATED, USER_LOGOUT } from './index';

export const getUserMeta = () => async (dispatch) => {
  const { data, error } = await getUserMetaAPI();
  if (error) throw new Error('UserAccessError');
  dispatch({ type: USER_AUTHENTICATED, user: data });
};

export const googleAuthenticate = ({ googleId, token }) => async (dispatch) => {
  const { data, error } = await signInAPI({ googleId, token });

  if (error) {
    Notify()(`Error while signing in. Try again.`, { type: 'error' });
    return;
  }

  const { access, refresh } = data;
  await Storage().save({ key: 'apiTokens', id: 'access', data: access });
  await Storage().save({ key: 'apiTokens', id: 'refresh', data: refresh });

  await getUserMeta()(dispatch);
};

export const logout = (signOut = async () => {}) => async (dispatch, getState) => {
  const { error } = await signOutAPI();
  if (!error) {
    await signOut();
    await Storage().remove({ key: 'apiTokens' });
    dispatch({ type: USER_LOGOUT });
  } else Notify()(`Error while signing you out. Try again.`, { type: 'error' });
};

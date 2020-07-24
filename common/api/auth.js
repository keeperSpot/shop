import api from './index';

export const signInAPI = ({ googleId, token }) =>
  api.post(`/app/sign-in/google/`, { googleId, token }, { secure: false });

export const getUserMetaAPI = () => api.get(`/auth/meta/`);

export const signOutAPI = () => api.get(`/auth/sign-out/`);

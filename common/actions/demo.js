import { Persistor, Storage, Notify } from '../helpers/shared';

import { HELLO_BUTTON_CLICKED, RESET_STATE } from './index';
import { logout } from './auth';

export const demoButtonClicked = () => ({
  type: HELLO_BUTTON_CLICKED,
});

export const resetState = () => async (dispatch) => {
  dispatch(logout());
  await Persistor().purge();
  await Storage().clearMap();
  Notify()('App reset success', { type: 'success' });
  dispatch({ type: RESET_STATE });
};

import { USER_AUTHENTICATED, USER_LOGOUT, RESET_STATE } from '../actions';

const initialState = {
  user: {
    firstName: null,
    lastName: null,
    email: null,
    image: null,
    id: null,
  },
  isAuthenticated: false,
  refresh: null,
  access: null,
};

export const auth = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case USER_AUTHENTICATED: {
      const { user, access, refresh } = action;
      return $({ user, access, refresh, isAuthenticated: true });
    }
    case USER_LOGOUT:
      return $(initialState);

    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

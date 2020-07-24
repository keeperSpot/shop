import { Notify } from '../helpers/shared';
import { HELLO_BUTTON_CLICKED, RESET_STATE } from '../actions';

const initialState = {
  clicked: 0,
  sessionTime: 0,
};

export const demo = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case HELLO_BUTTON_CLICKED:
      Notify()('Button clicked');
      return $({ clicked: state.clicked + 1 });

    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

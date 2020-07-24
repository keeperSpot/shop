import { RESET_STATE, CHANGE_PRIMARY_COLOR, KEYBOARD_WILL_SHOW, KEYBOARD_WILL_HIDE } from '../actions';
import { PRIMARY_COLOR } from '../secrets.json';

const initialState = {
  primaryColor: PRIMARY_COLOR,
  keyboardHeight: 0,
  isKeyboardVisible: false
};

export const theme = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return $({ primaryColor: action.color });
      
    case KEYBOARD_WILL_SHOW:
      return $({ keyboardHeight: action.height, isKeyboardVisible: true });
      
    case KEYBOARD_WILL_HIDE:
      return $({ keyboardHeight: 0, isKeyboardVisible: false })

    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

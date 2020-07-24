import {CHANGE_PRIMARY_COLOR, KEYBOARD_WILL_HIDE, KEYBOARD_WILL_SHOW} from './index';
import { PRIMARY_COLOR } from '../secrets.json';

export const changePrimaryColor = (color = PRIMARY_COLOR) => ({
  type: CHANGE_PRIMARY_COLOR,
  color
});


export const keyboardWillShow = (height) => ({
  type: KEYBOARD_WILL_SHOW,
  height
});

export const keyboardWillHide = () => ({
  type: KEYBOARD_WILL_HIDE
});

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Keyboard } from 'react-native';

import { keyboardWillHide, keyboardWillShow } from 'common/actions/theme';

export const useKeyboard = () => {
  const dispatch = useDispatch();
  const { keyboardHeight, isKeyboardVisible } = useSelector(state => state.theme);
  
  const $keyboardWillShow = ({ endCoordinates: { height } }) => dispatch(keyboardWillShow(height));
  const $keyboardWillHide = () => dispatch(keyboardWillHide());

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', $keyboardWillShow);
    Keyboard.addListener('keyboardWillHide', $keyboardWillHide);

    return () => {
      Keyboard.removeListener('keyboardWillShow', $keyboardWillShow);
      Keyboard.removeListener('keyboardWillHide', $keyboardWillHide);
    };
  }, []);

  return { keyboardHeight, isKeyboardVisible };
};

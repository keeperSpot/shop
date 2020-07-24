import { useDispatch, useSelector } from 'react-redux';

export const useThemeColors = () => {
  const primary = useSelector(state => state.theme.primaryColor);

  return { primary };
};


export const useRatio = ({ originalHeight, originalWidth, height, width, fill }) => {
  const { primary } = useThemeColors();
  
  let h = height;
  let w = width;
  let f = fill;
  const ratio = originalHeight / originalWidth;
  
  if (!h) h = width * ratio;
  if (!w) w = height / ratio;
  if (!f) f = primary;
  
  return { h, w, f }
};

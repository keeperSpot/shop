import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { BaseSurface } from 'framework/surface/BaseSurface';
import { useTailwind } from 'hooks/style';

export const TextInput = ({ placeholderTextColor = 'grey-99', ...props }) => {
  const { getColor } = useTailwind();

  return (
    <BaseSurface
      placeholderTextColor={getColor(placeholderTextColor)}
      component={RNTextInput}
      {...props} />
  );
};

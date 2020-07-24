import React from 'react';
import { TouchableOpacity } from 'react-native';

import { BaseSurface } from 'framework/surface/BaseSurface';

export const Touchable = ({ scroll, onPress, feedback = true, ...props }) => (
  <BaseSurface
    activeOpacity={feedback ? 0.2 : 1}
    component={TouchableOpacity}
    onPress={onPress}
    {...props}
  />
);

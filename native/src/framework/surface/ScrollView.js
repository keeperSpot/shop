import React from 'react';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

import { animated } from 'react-spring/native';

import { BaseSurface } from './BaseSurface';

const AnimatedScrollView = animated(InvertibleScrollView);

export const ScrollView = ({ ...props }) => (
  <BaseSurface
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    component={AnimatedScrollView}
    {...props}
  />
);

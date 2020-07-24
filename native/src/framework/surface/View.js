import React from 'react';
import { View as RNView } from 'react-native';

import { animated } from 'react-spring/native';

import { BaseSurface } from './BaseSurface';


const AnimatedView = animated(RNView);

export const View = ({ scroll, ...props }) => (
  <BaseSurface component={AnimatedView} {...props} />
);

import React from 'react';
import { Image as RNImage } from 'react-native';

import { animated } from 'react-spring/native';

import { BaseSurface } from './BaseSurface';


const AnimatedView = animated(RNImage);

export const Image = ({ ...props }) => (
  <BaseSurface component={AnimatedView} {...props} />
);

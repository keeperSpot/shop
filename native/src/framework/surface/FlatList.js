import React from 'react';
import { FlatList as RNFlatList } from 'react-native';

import { animated } from 'react-spring/native';

import { BaseSurface } from './BaseSurface';


const AnimatedFlatList = animated(RNFlatList);

export const FlatList = ({ scroll, ...props }) => (
  <BaseSurface component={AnimatedFlatList} {...props} />
);


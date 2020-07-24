import React from 'react';
import { Text } from 'framework/text/BaseText';

export const LargeTitle = ({ style, ...props }) =>
  <Text primary textClass='font-display-extra-bold text-4xl' {...props} />;

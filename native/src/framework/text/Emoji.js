import React from 'react';
import { Text } from 'framework/text/BaseText';

export const Emoji = ({ symbol, label, ...props }) => (
  <Text {...props}>
    {symbol}
  </Text>
);

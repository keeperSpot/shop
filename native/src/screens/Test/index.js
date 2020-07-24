import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { MonorepoIntro } from 'components/examples/MonorepoIntro';

export const TestTab = ({ tab: Tab }) => process.env.NODE_ENV === 'development'? (
  <Tab.Screen
    key='Test'
    component={MonorepoIntro}
    name='Test'
    options={{ tabBarIcon: ({ color }) => <Icon color={color} size={25} name='test-tube' /> }}
  />
) : null;

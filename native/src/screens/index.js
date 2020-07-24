import React from 'react';

import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { useThemeColors } from 'common/hooks/theme';

import { TestTab } from 'screens/Test';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from 'components/SignIn';
import { useTailwindSetup, TailwindProvider, useTailwind } from 'hooks/style';
import { modalConfigs } from '../helpers/modalConfig';


const Tab = createMaterialBottomTabNavigator();
const RootStack = createStackNavigator();

const TabNav = () => {
  const { getColor } = useTailwind();
  const { primary } = useThemeColors();

  return (
    <Tab.Navigator
      initialRouteName='Store'
      activeColor={primary}
      inactiveColor={getColor('gray-500')}
      barStyle={{ backgroundColor: getColor('gray-100'), borderRadius: 20, elevation: 0 }}
    >
      {TestTab({ tab: Tab })}
    </Tab.Navigator>
  );
};

export const Navigator = () => {
  const { t, c, css, getColor } = useTailwindSetup();
  const { primary } = useThemeColors();
  const theme = {
    dark: false,
    colors: {
      primary,
      background: '#FFFFFF',
      card: '#FFFFFF',
      text: '#999999',
      border: 'rgba(255, 255, 255, 0)',
    },
  };
  return (
    <SafeAreaProvider>
      <TailwindProvider value={{ t, c, css, getColor }}>
        <NavigationContainer theme={theme} screenOptions={{ headerShown: false }}>
          <RootStack.Navigator initialRouteName='Main' screenOptions={modalConfigs}>
            <RootStack.Screen
              name='Main'
              component={TabNav}
              headerMode={null}
            />
            <RootStack.Screen
              name='SignIn'
              component={SignInScreen}
              headerMode={null}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </SafeAreaProvider>
  );
};

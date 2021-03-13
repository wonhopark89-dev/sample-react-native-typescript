import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RootScreen from '~/RootScreen';
// UberEatsSwipe
import UberEatsSwipe from '~/UberEatsSwipe';
// Tutoral
import {default as PanGestureScreen} from '~/PanGesture';
import {default as TransitionsScreen} from '~/Transitions';

export type RootStackParamList = {
  RootScreen: undefined;
  UberEatsRootScreen: undefined;

  // Tutorial
  PanGestureScreen: undefined;
  TransitionsScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={'RootScreen'} headerMode={'none'}>
      <RootStack.Screen name={'RootScreen'} component={RootScreen} />
      <RootStack.Screen name={'UberEatsRootScreen'} component={UberEatsSwipe} />
      <RootStack.Screen name={'PanGestureScreen'} component={PanGestureScreen} />
      <RootStack.Screen name={'TransitionsScreen'} component={TransitionsScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;

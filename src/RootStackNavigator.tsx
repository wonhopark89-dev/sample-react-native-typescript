import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RootScreen from '~/RootScreen';
// UberEatsSwipe
import UberEatsSwipe from '~/UberEatsSwipe';
// Chanel
import {default as ChanelScreen} from '~/ChanelScrollAnimation';
// Philze Coffe
import {default as PhilzCoffeeScreen} from '~/PhilzCoffee';
// Tutoral
import {default as PanGestureScreen} from '~/PanGesture';
import {default as TransitionsScreen} from '~/Transitions';
import {default as AnimationsScreen} from '~/Animations';
import AnimatedScrollScreen from '~/AnimatedScroll/AnimatedScrollScreen';

export type RootStackParamList = {
  RootScreen: undefined;
  UberEatsRootScreen: undefined;
  ChanelScrollScreen: {gesture: string};
  PhilzCoffeeScreen: undefined;
  AnimatedScrollScreen: undefined;
  // Tutorial
  PanGestureScreen: undefined;
  TransitionsScreen: undefined;
  AnimationsScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={'RootScreen'} headerMode={'none'}>
      <RootStack.Screen name={'RootScreen'} component={RootScreen} />
      <RootStack.Screen name={'UberEatsRootScreen'} component={UberEatsSwipe} />
      <RootStack.Screen name={'PanGestureScreen'} component={PanGestureScreen} />
      <RootStack.Screen name={'TransitionsScreen'} component={TransitionsScreen} />
      <RootStack.Screen name={'AnimationsScreen'} component={AnimationsScreen} />
      <RootStack.Screen name={'ChanelScrollScreen'} component={ChanelScreen} />
      <RootStack.Screen name={'PhilzCoffeeScreen'} component={PhilzCoffeeScreen} />
      <RootStack.Screen name={'AnimatedScrollScreen'} component={AnimatedScrollScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;

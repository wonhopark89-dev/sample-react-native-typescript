import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RootScreen from '~/RootScreen';

export type RootStackParamList = {
  RootScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={'RootScreen'} headerMode={'none'}>
      <RootStack.Screen name={'RootScreen'} component={RootScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccordionMenu from '~/ByCatalinMiron/AccordionMenu/AccorionMenu';

export type StackParamList = {
  AccordionMenu: undefined;
};

const ByCatalinMironStack = createStackNavigator<StackParamList>();
const ByCatalinMironStackNavigator = () => (
  <ByCatalinMironStack.Navigator initialRouteName={'AccordionMenu'}>
    <ByCatalinMironStack.Screen name={'AccordionMenu'} component={AccordionMenu} />
  </ByCatalinMironStack.Navigator>
);

export default ByCatalinMironStackNavigator;

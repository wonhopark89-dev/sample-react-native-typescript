import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccordionMenu from '~/ByCatalinMiron/AccordionMenu/AccorionMenu';
import TutorialScreen from '~/ByCatalinMiron/TutorialScreen';
import StickyFooter from '~/ByCatalinMiron/StickyFooter/StickyFooter';

export type ByCatalinMironStackParamList = {
  TutorialScreen: undefined;
  AccordionMenu: undefined;
  StickyFooter: undefined;
};

const ByCatalinMironStack = createStackNavigator<ByCatalinMironStackParamList>();
const ByCatalinMironStackNavigator = () => (
  <ByCatalinMironStack.Navigator initialRouteName={'TutorialScreen'} headerMode={'none'}>
    <ByCatalinMironStack.Screen name={'TutorialScreen'} component={TutorialScreen} />
    <ByCatalinMironStack.Screen name={'AccordionMenu'} component={AccordionMenu} />
    <ByCatalinMironStack.Screen name={'StickyFooter'} component={StickyFooter} />
  </ByCatalinMironStack.Navigator>
);

export default ByCatalinMironStackNavigator;

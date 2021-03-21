import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {RootStackParamList} from '~/RootStackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'KaushanScript-Regular',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    marginVertical: 10
  }
});

interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}

interface MenuButtonProps {
  title: string;
  onPress: () => void;
}

const MenuButton = ({title, onPress}: MenuButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const RootScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
        <MenuButton title={'Tests'} onPress={() => navigation.navigate('UberEatsRootScreen')} />
        <MenuButton title={'PanGesture'} onPress={() => navigation.navigate('PanGestureScreen')} />
        <MenuButton title={'Transitions'} onPress={() => navigation.navigate('TransitionsScreen')} />
        <MenuButton title={'Animations'} onPress={() => navigation.navigate('AnimationsScreen')} />
        <MenuButton title={'Chanel Scroll  (Scroll)'} onPress={() => navigation.navigate('ChanelScrollScreen', {gesture: 'scroll'})} />
        <MenuButton title={'Chanel Scroll  (Pan)'} onPress={() => navigation.navigate('ChanelScrollScreen', {gesture: 'pan'})} />
        <MenuButton title={'PhilzCoffe'} onPress={() => navigation.navigate('PhilzCoffeeScreen')} />
        <MenuButton title={'Animated Scroll'} onPress={() => navigation.navigate('AnimatedScrollScreen')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RootScreen;

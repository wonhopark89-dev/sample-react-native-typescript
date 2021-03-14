import * as React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {RootStackParamList} from '~/RootStackNavigator';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'KaushanScript-Regular',
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 10,
    marginVertical: 10
  }
});

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
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
        <MenuButton title={'ChanelScroll'} onPress={() => navigation.navigate('ChanelScrollScreen')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RootScreen;

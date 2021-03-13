import * as React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {RootStackParamList} from '~/RootStackNavigator';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const RootScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'pink', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('UberEatsRootScreen')}>
        <View style={{padding: 20}}>
          <Text>Test </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PanGestureScreen')}>
        <View style={{padding: 20}}>
          <Text>PanGesture</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RootScreen;

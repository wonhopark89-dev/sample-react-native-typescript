import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ByCatalinMironStackParamList} from '~/ByCatalinMiron/ByCatalinMironStackNavigator';

interface Props {
  navigation: StackNavigationProp<ByCatalinMironStackParamList>;
}

interface ButtonProps {
  title: string;
  destination: string[keyof ByCatalinMironStackParamList];
}

const TUTORIAL_LIST: ButtonProps[] = [
  {
    title: 'Accordion\nMenu',
    destination: 'AccordionMenu'
  },
  {
    title: 'Sticky\nFooter',
    destination: 'StickyFooter'
  }
];

const styles = StyleSheet.create({
  title: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 24,
    letterSpacing: -2,
    textAlign: 'center'
  }
});

const TutorialScreen = ({navigation}: Props) => {
  const Button = ({title, destination}: ButtonProps) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(destination)}>
        <View style={{padding: 5, margin: 10, borderRadius: 10, backgroundColor: 'skyblue', width: '30%'}}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {TUTORIAL_LIST.map(({title, destination}, index) => (
        <Button key={index} title={title} destination={destination} />
      ))}
    </SafeAreaView>
  );
};

export default TutorialScreen;

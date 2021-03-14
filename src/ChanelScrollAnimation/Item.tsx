import React from 'react';
import {Alert, Dimensions, Image, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');
export const MIN_HEIGHT = 128;
export const MAX_HEIGHT = height / 2;
const styles = StyleSheet.create({
  container: {
    width,
    height: MAX_HEIGHT,
    justifyContent: 'flex-end'
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '500'
  },
  titleContainer: {
    maxHeight: MAX_HEIGHT * 0.61,
    justifyContent: 'center',
    flex: 1
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    padding: 32,
    transform: [{translateY: 64}]
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export interface Item {
  title: string;
  subtitle: string;
  picture: number;
  top: number;
}

interface ItemProps {
  index: number;
  y: Animated.SharedValue<number>;
  item: Item;
}

const Item = ({y, index, item: {title, subtitle, picture}}: ItemProps) => {
  const inputRange = [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT];
  const container = useAnimatedStyle<ViewStyle>(() => ({
    height: interpolate(y.value, inputRange, [MIN_HEIGHT, MAX_HEIGHT], Extrapolate.CLAMP)
  }));

  const titleStyle = useAnimatedStyle<ViewStyle>(() => ({
    opacity: interpolate(y.value, inputRange, [0, 1], Extrapolate.CLAMP)
  }));

  return (
    <TouchableWithoutFeedback onPress={() => Alert.alert('Pressed!')}>
      <Animated.View style={[styles.container, container]}>
        <Image source={picture} style={[styles.picture]} />
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>{subtitle.toUpperCase()}</Text>
          <Animated.View style={titleStyle}>
            <View>
              <Text style={styles.title}>{title.toUpperCase()}</Text>
            </View>
          </Animated.View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Item;

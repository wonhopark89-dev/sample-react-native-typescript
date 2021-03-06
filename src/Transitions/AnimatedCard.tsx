import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

import {Card, Cards, StyleGuide} from '../components';
import {mix} from 'react-native-redash';

const {width} = Dimensions.get('window');
const origin = -(width / 2 - StyleGuide.spacing * 2);
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    padding: StyleGuide.spacing * 4
  }
});

interface AnimatedCardProps {
  transition: Animated.SharedValue<number>;
  index: number;
  card: Cards;
}

const AnimatedCard = ({card, transition, index}: AnimatedCardProps) => {
  // const rotate = interpolate(transition.value, [0, 1], [0, ((index - 1) * Math.PI) / 6]);
  const style = useAnimatedStyle(() => {
    const rotate = (index - 1) * mix(transition.value, 0, Math.PI / 6);

    return {
      transform: [{translateX: origin}, {rotate: `${rotate}rad`}, {translateX: -origin}]
    };
  });

  return (
    <Animated.View key={card} style={[styles.overlay, style]}>
      <Card {...{card}} />
    </Animated.View>
  );
};

export default AnimatedCard;

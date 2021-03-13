import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Cards} from '~/components';
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import Animated, {useAnimatedGestureHandler, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {flex: 1}
});

interface GestureProps {
  width: number;
  height: number;
}

const Gesture = ({width, height}: GestureProps) => {
  // console.log({width, height});
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {offsetX: number; offsetY: number}>({
    // CALLBACK 목록
    onStart: (event, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.offsetX + event.translationX;
      translateY.value = ctx.offsetY + event.translationY;
    }
  });

  // animated 관련 스타일은 animated 객체에 적용할 수 있음
  const style = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}, {translateY: translateY.value}]
    };
  });
  return (
    <View style={styles.container}>
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View {...{style}}>
          <Card card={Cards.Card1} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Gesture;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, CARD_HEIGHT, CARD_WIDTH, Cards} from '~/components';
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import Animated, {useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay} from 'react-native-reanimated';
import {clamp, withBouncing} from 'react-native-redash';

const styles = StyleSheet.create({
  container: {flex: 1}
});

interface GestureProps {
  width: number;
  height: number;
}

const Gesture = ({width, height}: GestureProps) => {
  // console.log({width, height});
  const boundX = width - CARD_WIDTH;
  const boundY = height - CARD_HEIGHT;

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {offsetX: number; offsetY: number}>({
    // CALLBACK 목록
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      // translateX.value = ctx.offsetX + event.translationX; // 움직일땐 화면 밖으로 나갈 수 있음
      // 아예 화면 밖으로 안나가도록 설
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    // 움직이는 타겟 크기가 화면 밖으로 나갔을때 되돌아 오도록
    onEnd: (event, _) => {
      translateX.value = withDecay({
        velocity: event.velocityX,
        clamp: [0, boundX]
      });
      translateY.value = withDecay({
        velocity: event.velocityY,
        clamp: [0, boundY]
      });
    }
  });

  const onBounceGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {offsetX: number; offsetY: number}>({
    // CALLBACK 목록
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      // translateX.value = ctx.offsetX + event.translationX; // 움직일땐 화면 밖으로 나갈 수 있음
      // 아예 화면 밖으로 안나가도록 설
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    // 움직이는 타겟 크기가 화면 밖으로 나갔을때 되돌아 오도록
    onEnd: (event, _) => {
      translateX.value = withBouncing(withDecay({velocity: event.velocityX}), 0, boundX);
      translateY.value = withBouncing(withDecay({velocity: event.velocityY}), 0, boundY);
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
      <PanGestureHandler {...{onGestureEvent: onBounceGestureEvent}}>
        <Animated.View {...{style}}>
          <Card card={Cards.Card1} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Gesture;

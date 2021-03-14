import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Animated, {useAnimatedGestureHandler, useAnimatedScrollHandler, useSharedValue, withSpring} from 'react-native-reanimated';
import Item, {MAX_HEIGHT} from './Item';
import {items} from './Model';
import {RootStackParamList} from '~/RootStackNavigator';
import {RouteProp} from '@react-navigation/native';
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {clamp, snapPoint} from 'react-native-redash';

interface Props {
  route: RouteProp<RootStackParamList, 'ChanelScrollScreen'>;
}

const snapPoints = items.map((_, i) => i * -MAX_HEIGHT);
const styles = StyleSheet.create({
  container: {
    height: (items.length + 1) * MAX_HEIGHT,
    backgroundColor: 'black'
  }
});

const Channel = ({route}: Props) => {
  // console.log(JSON.stringify(route));
  const gesture = route.params.gesture;
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {y: value}}) => {
      y.value = value;
    }
  });

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {y: number}>({
    onStart: (_, ctx) => (ctx.y = y.value),
    onActive: ({translationY}, ctx) => clamp((y.value = ctx.y + translationY), -(items.length - 1) * MAX_HEIGHT, 0),
    onEnd: ({velocityY}, ctx) => {
      const dest = snapPoint(y.value, velocityY, snapPoints);
      y.value = withSpring(dest, {velocity: velocityY, overshootClamping: true});
    }
  });
  return (
    <>
      <StatusBar hidden />
      {gesture === 'scroll' ? (
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={onScroll}
          contentContainerStyle={{height: (items.length + 1) * MAX_HEIGHT}}
          snapToInterval={MAX_HEIGHT}
          decelerationRate={'fast'}>
          <Animated.View style={styles.container}>
            {items.map((item, index) => (
              <Item type={'scroll'} y={y} index={index} item={item} key={index} />
            ))}
          </Animated.View>
        </Animated.ScrollView>
      ) : (
        <View style={{flex: 1}}>
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View>
              {items.map((item, index) => (
                <Item type={'pan'} y={y} index={index} item={item} key={index} />
              ))}
            </Animated.View>
          </PanGestureHandler>
        </View>
      )}
    </>
  );
};

export default Channel;

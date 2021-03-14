import React from 'react';
import {Dimensions, View, ScrollView, StyleSheet} from 'react-native';

import {products} from './Model';
import Card, {CARD_HEIGHT} from './Card';
import Products from './Products';
import Cards from './components/Cards';
import Animated, {interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
const {width} = Dimensions.get('window');

const snapToOffsets = [0, CARD_HEIGHT]; // 세로 스크롤 기준 스크롤 시, 상단 오프셋 넘어가는 크기
const styles = StyleSheet.create({
  slider: {height: CARD_HEIGHT}
});

// snapToInterval : 스크롤 단위 ? 화면 단위로 스크롤이 될때 주로 width 값
// snapToEnd : false 이면 한번에 끝으로 안감
const PhilzCoffee = () => {
  const translateX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {x}}) => {
      translateX.value = x;
    }
  });

  const style = useAnimatedStyle(() => ({
    flex: 1,
    backgroundColor: interpolateColor(
      translateX.value,
      products.map((_, i) => width * i), // input range : interpolate 가 이루어지는 크기 단위 라고 생각하면됨
      products.map((product) => product.color2)
    )
  }));

  return (
    <Animated.View style={style}>
      <ScrollView
        decelerationRate={'fast'}
        snapToOffsets={snapToOffsets}
        bounces={false}
        showsVerticalScrollIndicator={false}
        snapToEnd={false}>
        <View style={styles.slider}>
          <Animated.ScrollView
            onScroll={onScroll}
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            snapToInterval={width}
            showsHorizontalScrollIndicator={false}
            horizontal>
            {products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </Animated.ScrollView>
          <Products x={translateX} />
        </View>
        <Cards />
      </ScrollView>
    </Animated.View>
  );
};

export default PhilzCoffee;

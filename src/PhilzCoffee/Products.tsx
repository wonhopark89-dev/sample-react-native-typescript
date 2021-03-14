import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

import {products} from './Model';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {CARD_HEIGHT} from '~/PhilzCoffee/Card';

const {width} = Dimensions.get('window');
const SIZE = 200;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: CARD_HEIGHT / 5
  }
});

interface ProductProps {
  product: typeof products[0];
  index: number;
  x: Animated.SharedValue<number>;
}

const Product = ({product, index, x}: ProductProps) => {
  const style = useAnimatedStyle(() => {
    const inputRange = [width * (index - 1), width * index, width * (index + 1)];
    const translateX = interpolate(x.value, inputRange, [width / 2, 0, -width / 2]);
    const scale = interpolate(x.value, inputRange, [0.75, 1, 0.75]);
    return {transform: [{translateX}, {scale}]};
  });

  return (
    <Animated.View key={index} style={[styles.imageStyle, style]}>
      <Image source={product.picture} style={{width: SIZE, height: SIZE * product.aspectRatio}} />
    </Animated.View>
  );
};

interface ProductsProps {
  x: Animated.SharedValue<number>;
}

const Products = ({x}: ProductsProps) => {
  return (
    <View style={styles.container} pointerEvents="none">
      {products.map((product, index) => (
        <Product key={index} product={product} index={index} x={x} />
      ))}
    </View>
  );
};

export default Products;

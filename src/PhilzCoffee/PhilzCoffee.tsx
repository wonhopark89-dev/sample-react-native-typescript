import React from 'react';
import {Dimensions, View, ScrollView, StyleSheet} from 'react-native';

import {products} from './Model';
import Card, {CARD_HEIGHT} from './Card';
import Products from './Products';
import Cards from './components/Cards';

const {width} = Dimensions.get('window');

const snapToOffsets = [0, CARD_HEIGHT];
const styles = StyleSheet.create({
  slider: {height: CARD_HEIGHT}
});

// snapToInterval : 스크롤 단위 ? 화면 단위로 스크롤이 될때 주로 width 값
// snapToEnd : false 이면 한번에 끝으로 안감
const PhilzCoffee = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        decelerationRate={'fast'}
        snapToOffsets={snapToOffsets}
        bounces={false}
        showsVerticalScrollIndicator={false}
        snapToEnd={false}>
        <View style={styles.slider}>
          <ScrollView decelerationRate={'fast'} snapToInterval={width} showsHorizontalScrollIndicator={false} horizontal>
            {products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </ScrollView>
          <Products />
        </View>
        <Cards />
      </ScrollView>
    </View>
  );
};

export default PhilzCoffee;

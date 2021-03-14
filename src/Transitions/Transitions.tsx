import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Button, StyleGuide, cards} from '../components';

import AnimatedCard from './AnimatedCard';
import {useSpring, useTiming} from 'react-native-redash';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.background,
    justifyContent: 'flex-end'
  }
});

// Manually useSpring
// const customUseSpring = (state, config) => {
//   const value = useSharedValue(0);
//   useEffect(() => {
//     value.value = typeof state === 'number' ? state : state ? 1 : 0;
//   }, [state, value]);
//   return useDerivedValue(() => withSpring(value.value, config));
// };

// Manually useSpring
// const customUseTiming = (state, config) => {
//   const value = useSharedValue(0);
//   useEffect(() => {
//     value.value = typeof state === 'number' ? state : state ? 1 : 0;
//   }, [state, value]);
//   return useDerivedValue(() => withTiming(value.value, config));
// };

const UseTransition = () => {
  const [toggledSpring, setToggleSpring] = useState(false);
  const [toggledTiming, setToggleTiming] = useState(false);
  const transitionSpring = useSpring(toggledSpring); // 스프링 애니메이션
  const transitionTiming = useTiming(toggledTiming, {duration: 600}); // 해당시간 내 이동

  return (
    <>
      <View style={styles.container}>
        {cards.slice(0, 3).map((card, index) => (
          <AnimatedCard key={card} {...{index, card, transition: transitionSpring}} />
        ))}
        <Button label={toggledSpring ? 'Reset' : 'Start'} primary onPress={() => setToggleSpring((prev) => !prev)} />
      </View>

      <View style={styles.container}>
        {cards.slice(0, 3).map((card, index) => (
          <AnimatedCard key={card} {...{index, card, transition: transitionTiming}} />
        ))}
        <Button label={toggledTiming ? 'Reset' : 'Start'} primary onPress={() => setToggleTiming((prev) => !prev)} />
      </View>
    </>
  );
};

export default UseTransition;

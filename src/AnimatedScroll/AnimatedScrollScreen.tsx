// Inspiration: https://dribbble.com/shots/14154226-Rolodex-Scrolling-Animation/attachments/5780833?mode=media
// Photo by Sharefaith from Pexels
// Background image: https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/

import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import faker from 'faker';

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email()
  };
});

const BG_IMG = 'https://blog.kakaocdn.net/dn/mtTE6/btqBVLNrB44/kmiN47aL0uLwctJ1KMihFk/img.jpg';
const SPACING = 20;
const AVATAR_SIZE = 70;

export default () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar hidden />
      <Image source={{uri: BG_IMG}} style={[StyleSheet.absoluteFillObject]} blurRadius={80} />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42
        }}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: 'rgba(255,255,255,0.7)',
                borderRadius: 12,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 10
                },
                shadowOpacity: 0.3,
                shadowRadius: 20
              }}>
              <Image
                source={{uri: item.image}}
                style={{width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE, marginRight: SPACING / 2}}
              />
              <View>
                <Text style={{fontSize: 22, fontWeight: '700'}}>{item.name}</Text>
                <Text style={{fontSize: 18, opacity: 0.7}}>{item.jobTitle}</Text>
                <Text style={{fontSize: 12, opacity: 0.8, color: '#0099CC'}}>{item.email}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

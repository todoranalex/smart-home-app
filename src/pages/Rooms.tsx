import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';
import {primary} from '../StyleGuide';
import {Profile} from './Yard';

const Room = ({}: {}): JSX.Element => {
  return <View style={{height: 100, width: 100}}></View>;
};

export default () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Profile />
      <Room />
      <Room />
      <Room />
      <Room />
    </View>
  );
};

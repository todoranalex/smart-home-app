import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {primary} from '../StyleGuide';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Switch} from 'react-native-switch';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

export const Profile = (): JSX.Element => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        marginHorizontal: 24,
        marginTop: 40,
      }}>
      <FastImage
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
        }}
        source={{
          uri:
            'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        }}
        resizeMode={'cover'}
      />
      <Text style={{fontFamily: 'Poppins-Regular', marginTop: 8}}>
        Welcome, Alex.
      </Text>
    </View>
  );
};

const TopCard = ({
  label,
  icon,
  style,
  onPress,
}: {
  label: string;
  icon: string;
  style?: ViewStyle;
  onPress(): void;
}): JSX.Element => (
  <TouchableOpacity
    style={{...styles.topCardContainer, ...style}}
    onPress={() => {
      onPress();
    }}>
    <Icon
      name={icon}
      color={primary.default}
      size={24}
      style={{
        marginRight: 12,
      }}
    />
    <Text style={styles.topCardLabel}>{label}</Text>
  </TouchableOpacity>
);

const BottomCard = ({
  active,
  label,
  icon,
  style,
  onPress,
}: {
  active: boolean;
  label: string;
  icon: string;
  style?: ViewStyle;
  onPress(value: boolean): void;
}): JSX.Element => {
  return (
    <View
      style={{
        ...styles.topCardContainer,
        flexDirection: 'column',
        paddingVertical: 24,
        ...style,
      }}>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: primary.default,
          marginBottom: 12,
          fontSize: 20,
        }}>
        {label.toUpperCase()}
      </Text>
      <FastImage
        style={{height: 100, width: 100}}
        source={{
          uri: icon,
        }}
      />
      <Switch
        value={active}
        activeText={''}
        inActiveText={''}
        onValueChange={(value) => {
          onPress(value);
        }}
        circleActiveColor={primary.default}
        circleInActiveColor={'white'}
        renderInsideCircle={() => {
          return (
            <Text
              style={{
                color: active ? 'white' : primary.default,
                fontFamily: 'Poppins-Regular',
                fontSize: 8,
              }}>
              {active ? 'ON' : 'OFF'}
            </Text>
          );
        }}
        backgroundActive={'white'}
        backgroundInactive={primary.default}
        containerStyle={styles.switch}
      />
    </View>
  );
};

export default () => {
  const navigation = useNavigation();
  const [doorActive, setDoorActive] = useState(false);
  const [gateActive, setGateActive] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Profile />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 24,
            marginBottom: 12,
          }}>
          <TopCard
            label={'Morning'}
            icon={'wb-sunny'}
            style={{marginEnd: 6}}
            onPress={() => {
              setDoorActive(true);
              setGateActive(true);
            }}
          />
          <TopCard
            label={'Evening'}
            icon={'wb-twighlight'}
            style={{marginStart: 6}}
            onPress={() => {
              setDoorActive(true);
              setGateActive(false);
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 24,
            marginBottom: 24,
          }}>
          <TopCard
            label={'Night'}
            icon={'brightness-3'}
            style={{marginEnd: 6}}
            onPress={() => {
              setDoorActive(false);
              setGateActive(false);
            }}
          />
          <TopCard
            label={'Leave'}
            icon={'time-to-leave'}
            style={{marginStart: 6}}
            onPress={() => {
              setDoorActive(false);
              setGateActive(true);
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <BottomCard
            active={gateActive}
            label={'The gate'}
            icon={
              'https://www.freepngimg.com/thumb/gate/31821-6-fancy-gate-photos-thumb.png'
            }
            style={{marginEnd: 6}}
            onPress={(value) => {
              setGateActive(value);
            }}
          />
          <BottomCard
            active={doorActive}
            label={'The door'}
            icon={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrNo4GyFKNuPrASLFCrzw528vIvDpAip3oAw&usqp=CAU'
            }
            style={{marginStart: 6}}
            onPress={(value) => {
              setDoorActive(value);
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.enterHouseButton}
          onPress={() => {
            navigation.navigate('Rooms');
          }}>
          <Text style={{color: 'white'}}>Enter the house</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topCardContainer: {
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 0.2,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: 10,
    width: (width - 48) / 2,
    elevation: 2,
    flexDirection: 'row',
    paddingHorizontal: 32,
    alignItems: 'center',
    paddingVertical: 5,
  },
  topCardLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: primary.default,
  },
  enterHouseButton: {
    position: 'absolute',
    bottom: 24,
    borderRadius: 5,
    width: 200,
    height: 44,
    marginTop: 48,
    backgroundColor: primary.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    marginTop: 24,
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 0.2,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

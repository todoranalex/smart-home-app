import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';

const Room = ({
  url,
  style,
  temperature,
}: {
  url: string;
  temperature: number;
  style?: ViewStyle;
}): JSX.Element => {
  return (
    <View
      style={[
        {
          flex: 1,
          height: 150,
          justifyContent: 'center',
          shadowColor: 'black',
          shadowRadius: 3,
          shadowOpacity: 0.2,
          backgroundColor: 'white',
          shadowOffset: {
            width: 0,
            height: 3,
          },
        },
        style,
      ]}>
      <FastImage
        resizeMode={'cover'}
        style={{flex: 1, borderRadius: 5}}
        source={{
          uri: url,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          bottom: 0,
          color: 'white',
          fontFamily: 'Poppins-Regular',
          fontSize: 16,
          right: 0,
          margin: 8,
        }}>
        {temperature} °C
      </Text>
    </View>
  );
};

export default () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 24,
      }}>
      {/* <Profile /> */}
      <Text style={{fontFamily: 'Poppins-Regular', marginBottom: 8}}>
        Rooms
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Room
          url={
            'https://cdn.home-designing.com/wp-content/uploads/2018/05/stylish-mid-century-style-green-living-room.jpg'
          }
          style={{marginEnd: 6}}
          temperature={21}
        />
        <Room
          url={
            'https://www.ikea.com/images/58/03/5803ef752cba3fda68fb73083addd994.jpg?f=s'
          }
          style={{marginStart: 6}}
          temperature={22}
        />
      </View>
      <View style={{flexDirection: 'row', marginVertical: 12}}>
        <Room
          url={
            'https://st.hzcdn.com/fimgs/pictures/bathrooms/build-nashville-bathrooms-build-nashville-img~20a1af9e0e3eda9e_7504-1-e4c5389-w312-h312-b0-p0.jpg'
          }
          style={{marginEnd: 6}}
          temperature={18}
        />
        <Room
          url={
            'https://i.pinimg.com/originals/57/aa/b5/57aab538dc4f600c477f0ede798d7221.jpg'
          }
          style={{marginStart: 6}}
          temperature={20}
        />
      </View>
      <Text style={{fontFamily: 'Poppins-Regular', marginBottom: 8}}>
        Devices
      </Text>
    </View>
  );
};

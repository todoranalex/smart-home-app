import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Devices from './pages/Devices';
import Usage from './pages/Usage';
import Yard from './pages/Yard';
import {primary} from './StyleGuide';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Rooms from './pages/Rooms';

const Home = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={'Yard'}>
      <Stack.Screen
        name="Yard"
        component={Yard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Rooms"
        component={Rooms}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            shadowColor: 'rgb(0,0,0)',
            shadowRadius: 8,
            shadowOpacity: 0.05,
            borderTopWidth: 0,
            borderTopColor: 'transparent',
            elevation: 5,
          },
          allowFontScaling: true,
          adaptive: true,
          showLabel: false,
          activeTintColor: primary.default,
          inactiveTintColor: primary.default,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Device"
          component={Devices}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="devices-other" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Usage"
          component={Usage}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="show-chart" size={32} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

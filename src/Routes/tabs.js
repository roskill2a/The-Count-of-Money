import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import HomeScreen from '../App/HomeScreen';
import InfosScreen from '../App/InfosScreen';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#F6AA84',
        }}>
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({color, size}) => (
              <Icon
                type="Entypo"
                name="home"
                style={{color: color}}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={InfosScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon
                type="MaterialCommunityIcons"
                name="account"
                style={{color: color}}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

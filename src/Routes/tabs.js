import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
import {createStackNavigator} from 'react-navigation-stack';
import {Icon} from 'native-base';
import {
  InfosScreen,
  HomeScreen,
  DetailScreen,
  CryptoListScreen,
  ArticlesScreen,
} from '../App/';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Details: DetailScreen,
  CryptoList: CryptoListScreen,
});

const MyTabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" type="Entypo" style={{color: tintColor}} />
        ),
      },
    },
    Articles: {
      screen: ArticlesScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="book-open"
            type="FontAwesome5"
            style={{color: tintColor}}
          />
        ),
      },
    },
    Settings: {
      screen: InfosScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="MaterialCommunityIcons"
            name="account"
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#193286',
      inactiveTintColor: 'gray',
    },
  },
);

export default MyTabs;

// export function MyTabs() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           activeTintColor: '#F6AA84',
//         }}>
//         <Tab.Screen
//           name="Feed"
//           component={HomeStackScreen}
//           options={{
//             tabBarLabel: 'Feed',
//             tabBarIcon: ({color, size}) => (
//               <Icon
//                 type="Entypo"
//                 name="home"
//                 style={{color: color}}
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={InfosScreen}
//           options={{
//             tabBarLabel: 'Profile',
//             tabBarIcon: ({color, size}) => (
//               <Icon
//                 type="MaterialCommunityIcons"
//                 name="account"
//                 style={{color: color}}
//                 size={size}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

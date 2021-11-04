import React from 'react';
import TabBar from 'components/TabBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { mainNavigationRef } from '../rootNavigation';
import RNBootSplash from 'react-native-bootsplash';

import { Text, View } from 'react-native';

//Screens
import HomeScreen from 'containers/Home';
import NotificationScreen from 'containers/Notification';
import MenuScreen from 'containers/Menu';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NotificationStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

const MenuStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
      />
    </Stack.Navigator>
  );
};

const HomeStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }

  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
  );
};

const TabNavigator = () => (
  <Tab.Navigator tabBar={TabBar}>
    <Tab.Screen name="HomeStack" component={HomeStack} />
    <Tab.Screen name="NotificationStack" component={NotificationStack} options={{
        title: 'Profile',
        ...TransitionPresets.ModalPresentationIOS,
      }}/>
    <Tab.Screen name="MenuStack" component={MenuStack} />
  </Tab.Navigator>
);

export default () => {

  return (
    <>
      <NavigationContainer
        ref={mainNavigationRef}
        onReady={() => RNBootSplash.hide({ fade: true })}>
        <TabNavigator />
      </NavigationContainer>
    </>
  );
};

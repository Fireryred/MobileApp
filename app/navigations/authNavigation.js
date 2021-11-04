import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'containers/Login';
import {authNavigationRef} from '../rootNavigation';
import RNBootSplash from 'react-native-bootsplash';

const Stack = createStackNavigator();

const AuthNavigation = ({isAppVisited}) => {
  return (
    // <SafeAreaProvider>
      <NavigationContainer
        ref={authNavigationRef}
        onReady={() => RNBootSplash.hide({fade: true})}>
        <Stack.Navigator
          options={{
            gestureEnabled: false,
          }}>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            name="SignupScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    // </SafeAreaProvider>
  );
};

export default AuthNavigation;

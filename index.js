/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './app/app';
import {name as appName} from './app.json';
import {enableScreens} from 'react-native-screens';

enableScreens();

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);

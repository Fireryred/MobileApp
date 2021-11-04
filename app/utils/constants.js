import {Dimensions, Platform} from 'react-native';

export const DeviceWidth = Dimensions.get('window').width;
export const DeviceHeight = Dimensions.get('window').height;
export const isAndroid = Platform.OS === 'android';

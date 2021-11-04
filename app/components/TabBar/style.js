import {StyleSheet} from 'react-native';

const StyleSheetFactory = (theme) => {
  return StyleSheet.create({
    container: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      // paddingTop: 10,
    },
    absoluteView: {
      width: '100%',
      height: 60,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.colors.white,
    },
    tabContainer: {
      justifyContent: 'space-around',
      width: '100%',
      flex: 1,
      alignItems: 'center',
      height: 60,
      backgroundColor: theme.colors.white,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: theme.colors.gray,
    },
    tabButton: {
      width: '100%',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    primary: {
      backgroundColor: theme.colors.primary,
    },
  });
};

export default StyleSheetFactory;

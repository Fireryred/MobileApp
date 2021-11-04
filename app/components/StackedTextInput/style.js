import {StyleSheet} from 'react-native';

const StyleSheetFactory = (theme) => {
  return StyleSheet.create({
    labelStyle: {
      fontSize: 12,
      color: theme.colors.gray,
    },
    containerStyle: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.gray,
      height: 40,
    },
    leftIconContainerStyle: {
      width: 40,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightIconContainerStyle: {
      width: 40,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftIconStyle: {
      fontSize: 24,
    },
    rightIconStyle: {
      fontSize: 24,
    },
    input: {
      color: theme.colors.black,
      paddingHorizontal: 0,
      height: 48,
      paddingVertical: 0,
    },
    strengthBarContainer: {
      height: 8,
      width: '100%',
      backgroundColor: theme.colors.gray,
      borderRadius: 30,
      marginTop: theme.metrics.base.sm,
    },
  });
};

export default StyleSheetFactory;

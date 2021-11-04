import {StyleSheet} from 'react-native';

const StyleSheetFactory = (theme) => {
  return StyleSheet.create({
    outerView: {
      ...StyleSheet.absoluteFill,
      zIndex: 1,
      elevation: 3,
      backgroundColor: 'transparent',
    },
    innerView: {
      ...StyleSheet.absoluteFill,
      backgroundColor: theme.colors.white,
      opacity: 0.5,
      zIndex: 2,
      elevation: 3,
    },
    progressContainer: {
      ...StyleSheet.absoluteFill,
      backgroundColor: theme.colors.white,
      opacity: 1,
      zIndex: 2,
      elevation: 3,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      marginBottom: theme.metrics.sm,
      fontSize: 24,
    },
  });
};

export default StyleSheetFactory;

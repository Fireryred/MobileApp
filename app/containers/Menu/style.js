import {StyleSheet} from 'react-native';

const center = {
  justifyContent: 'center',
  alignItems: 'center',
};

const StyleSheetFactory = (theme) => {
  return StyleSheet.create({
    headerTitle: {
      fontWeight: '700',
      color: theme.colors.black,
      marginHorizontal: theme.metrics.base.md,
      backgroundColor: theme.colors.white,
    },
    modalView: {
      ...center,
      padding: theme.metrics.base.md,
    },
    modalContainer: {
      height: 180,
      width: 250,
      backgroundColor: theme.colors.white,
      borderRadius: 10,
    },
    modalTitle: {
      alignItems: 'center',
      paddingHorizontal: theme.metrics.base.sm,
      borderBottomColor: theme.colors.lightGray,
      borderBottomWidth: 2,
    },
    modalButton: {
      ...center,
      height: '100%',
    },
    modalBody: {
      ...center,
      paddingHorizontal: theme.metrics.base.sm,
    },
  });
};

export default StyleSheetFactory;

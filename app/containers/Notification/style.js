import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StyleSheetFactory = (theme) => {
  return StyleSheet.create({
    headerTitle: {
      fontWeight: '700',
      color: theme.colors.black,
      marginHorizontal: theme.metrics.base.md,
      backgroundColor: theme.colors.white,
    },
    needActionsRowView: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.white,
      paddingHorizontal: 16,
      paddingVertical: 8,
      paddingBottom: 16,
      borderRadius: 5,
    },
    needActionsItemContainer: {
      minHeight: 40,
      width: '100%',
      flexDirection: 'row',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.gray,
      marginBottom: 4,
    },
    needActionsButton: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      marginTop: 8,
      justifyContent: 'center',
      backgroundColor: theme.colors.secondary,
      borderRadius: 5,
    },
    needActionsButtonText: {
      color: theme.colors.white,
      fontSize: 12,
    },
    needActionsHorizontalItem: {
      backgroundColor: theme.colors.secondary,
      height: 90,
      width: wp('48%'),
      marginRight: 16,
      borderRadius: 10,
      padding: 16,
      paddingVertical: 8,
      position: 'relative',
    },
    needActionsHorizontalItemText: {
      color: theme.colors.white,
      fontWeight: '500',
      fontSize: 12,
    },
    needActionsHorizontalItemBottom: {
      position: 'absolute',
      flexDirection: 'row',
      paddingLeft: 16,
      paddingBottom: 8,
      bottom: 0,
      left: 0,
      right: 0,
      height: hp('4%'),
      width: wp('48%'),
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingRight: 8,
    },
    widgetTitleContainer: {
      height: 28,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    widgetTitle: {
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'center',
    },
    needsActionNoData: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 24,
    },
    notificationsNoData: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: 24,
    },
    menuOption: {
      height: 32,
      justifyContent: 'center',
    },
    menuOptionsContainer: {
      minHeight: 70,
      width: '100%',
      padding: 8,
      backgroundColor: theme.colors.white,
    },
  });
};

export default StyleSheetFactory;

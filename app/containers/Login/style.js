import {StyleSheet} from 'react-native';
import theme from 'theme';
import {DeviceHeight} from 'constants';

const center = {
  justifyContent: 'center',
  alignItems: 'center',
};

export default StyleSheet.create({
  content: {
    marginHorizontal: theme.metrics.base.md,
    // marginVertical: theme.metrics.base.sm,
    // backgroundColor: 'yellow'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  headerTitle: {
    fontWeight: '700',
    color: theme.colors.black,
    flex: 1,
  },
  step: {
    textAlign: 'right',
    flex: 1,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  // form: {
  //   marginTop: DeviceHeight * 0.1,
  // },
  loginButton: {
    marginTop: 32,
    height: 48,
    borderRadius: 30,
  },
  stackedInput: {
    marginBottom: theme.metrics.base.md,
  },
  errorMessage: {
    color: theme.colors.gray,
    fontSize: 16,
  },
  errorMessageContainer: {
    flex: 1,
    alignItems: 'center',
    minHeight: 48,
    flexDirection: 'row',
  },
  errorIcon: {
    fontSize: 24,
    marginRight: theme.metrics.base.xs,
    color: theme.colors.error,
  },
  fingerprintButton: {
    marginTop: 32,
    borderColor: theme.colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  forgotPassword: {
    color: theme.colors.primary,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '600',
  },
  signupContainer: {
    ...center,
    flexDirection: 'row',
    marginTop: theme.metrics.base.sm,
  },
  footer: {
    backgroundColor: theme.colors.white,
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    elevation: 0,
    marginBottom: theme.metrics.base.xl,
    padding: 0,
    borderTopWidth: 0,
    alignItems: 'flex-end',
  },
  accountView: {
    height: 30,
    width: 30,
    borderRadius: 17,
    backgroundColor: theme.colors.primary,
    ...center,
  },
  accountImage: {
    height: '60%',
    width: '60%',
  },
  selectedUserGrid: {
    height: 42,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
});

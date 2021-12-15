/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  H1,
  Form,
  RenderTextField,
  View,
  Icon,
  Footer,
  CustomContainer,
  Image,
  Grid,
  Col,
  Row,
} from 'components';
// import Modal from 'react-native-modal';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './style';
import theme from 'theme';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Actions from './actions';
import RootActions from '../Root/actions';
import {Field, reduxForm, reset} from 'redux-form/immutable';
import {isRequired} from 'validations';
import PropTypes from 'prop-types';
import withLinkTo from '../../hoc/withLinkTo';
import {createStructuredSelector} from 'reselect';
import {selectors} from './selectors';
import {selectors as MenuSelectors} from '../Menu/selectors';
import {selectors as RootSelectors} from '../Root/selectors';
import {capitalizeFirstLetter} from 'utils/utilityFunctions';
import ReactNativeBiometrics from 'react-native-biometrics';
import Fido2 from 'react-native-fido2';

class LoginScreen extends Component {
  state = {
    showPassword: false,
    openSwitchAccount: false,
  };

  componentDidMount() {
    const {setLoading} = this.props;
    setLoading(false);
  }

  handleShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  submitForm = (values) => {
    const {attemptLogin, dispatch, navigation} = this.props;
    // return new Promise((resolve, reject) => {
    attemptLogin(values.toJS());
    // this.props.setAuthSuccess({test: 'test'});
    // })
    //   .then(() => {
    //     dispatch(reset('login'));
    //     // navigation.navigate('SignUpScreen');
    //   })
    //   .catch((e) => {});
  };

  handleRegisterFido2 = () => {
    const register = Fido2.registerKey().then();
  };

  handleBiometric = () => {
    const {attemptBiometric} = this.props;
    attemptBiometric();
  };
  render() {
    const {handleSubmit, error, pristine, invalid, isLoading, loginProgress} =
      this.props;
    const {showPassword} = this.state;

    const disabled = pristine || invalid || isLoading;

    const enabledButton = {backgroundColor: disabled ? '#9DA3B4' : '#B22234'};

    return (
      <CustomContainer>
        {/* <Container> */}
        <Content showsVerticalScrollIndicator={false} style={styles.content}>
          <CustomContainer safe>
            <View style={{flex: 1, alignItems: 'center', marginBottom: 32}}>
              <Text style={{marginTop: 16, fontSize: 30, fontWeight: 'bold'}}>
                Login
              </Text>
            </View>
            <KeyboardAvoidingView>
              <Form>
                <Field
                  name="username"
                  component={RenderTextField}
                  label="Username"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="rgba(255,255,255,0.9)"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  selectionColor={theme.colors.primary}
                  style={styles.stackedInput}
                  required={true}
                />

                <Field
                  name="password"
                  component={RenderTextField}
                  label="Password"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="rgba(255,255,255,0.9)"
                  returnKeyType="go"
                  autoCapitalize="none"
                  autoCorrect={false}
                  selectionColor={theme.colors.primary}
                  style={styles.stackedInput}
                  required={true}
                  secureTextEntry={true}
                  password={true}
                  showPassword={showPassword}
                  onPressToggle={this.handleShowPassword}
                  validate={[isRequired]}
                />

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignContent: 'flex-end',
                  }}>
                  <View style={{flex: 1}}></View>
                  <View style={{textAlign: 'right'}}>
                    <TouchableOpacity>
                      <Text style={styles.forgotPassword}>Forgot Password</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {error && (
                  <View style={styles.errorMessageContainer}>
                    <Icon
                      name="error-outline"
                      type="MaterialIcons"
                      style={styles.errorIcon}
                    />
                    <Text style={styles.errorMessage}>{error}</Text>
                  </View>
                )}

                <Button
                  block
                  style={[styles.loginButton, {...enabledButton}]}
                  onPress={handleSubmit((values) => this.submitForm(values))}
                  // disabled={disabled}
                >
                  <Text style={{fontWeight: '600'}}>
                    {loginProgress ? 'Loading....' : 'Login'}
                  </Text>
                </Button>
              </Form>
            </KeyboardAvoidingView>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                marginTop: 24,
                marginBottom: 40,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{fontSize: 13, marginRight: 8}}>
                    Don't have an account?
                  </Text>
                </View>

                <TouchableOpacity
                // onPress={this.handleSignup}
                // onPress={this.verifyIdentity}
                >
                  <Text
                    style={{
                      color: theme.colors.primary,
                      fontSize: 14,
                      // marginLeft: theme.metrics.base.xs,
                      fontWeight: 'bold',
                    }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={this.handleBiometric /*(values.username)*/}>
                <Text
                  style={{
                    color: theme.colors.primary,
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  Use Fingerprint
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleRegisterFido2}>
                <Text
                  style={{
                    color: theme.colors.primary,
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  Register via Fido2
                </Text>
              </TouchableOpacity>
            </View>
          </CustomContainer>
        </Content>
        {/* </Container> */}
      </CustomContainer>
    );
  }
}

LoginScreen.propTypes = {
  isLoading: PropTypes.bool,
  loginProgress: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isLoading: RootSelectors.selectIsLoading(),
  loginProgress: selectors.selectLoginProgressStatus(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        ...Actions.Creators,
        ...RootActions.Creators,
      },
      dispatch,
    ),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
const withLink = withLinkTo(withConnect);
const withReduxForm = reduxForm({
  form: 'login',
})(withLink);

export default withReduxForm;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Platform,
  View,
  StyleSheet,
  Keyboard,
  ActivityIndicator,
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectors} from './selectors';
import {createStructuredSelector} from 'reselect';
import Actions from './actions';
import RootActions from '../Root/actions';
import NotificationActions from '../Notification/actions';
import AuthActions from '../Login/actions';
import {reduxForm, Field, reset} from 'redux-form/immutable';

import withLinkTo from 'hoc/withLinkTo';
import {
  Text,
  Grid,
  Row,
  Col,
  Image,
  TouchableOpacity,
  CustomContainer,
  Icon,
  Form,
  RenderTextField,
} from 'components';

import withTheme from 'hoc/withTheme';
import {capitalizeFirstLetter, formatNumber} from 'utils/utilityFunctions';
import {DeviceWidth} from 'utils/constants';

class HomeScreen extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      openSwitchAccount: false,
      switchEnterCredentials: false,
      styles: null,
      themeName: null,
      theme: null,
      showPassword: false,
      clickedSavedUser: null,
      isKeyboardOpen: false,
      width: DeviceWidth,
      offset: 0,
      index: 0,
    };
    this.didClickHomeTab = null;
    this.internals = {
      isScrolling: false,
      offset: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.themeContext.themeName !== state.themeName) {
      return {
        styles: null,
        themeName: props.themeContext.themeName,
        theme: props.themeContext.theme,
      };
    }
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <CustomContainer
        // safe
        style={{
          // backgroundColor: 'red',
        }}>
          <Text>Home</Text>
        {/* <DashboardScreen
          navigation={navigation}
          homeScrollView={this.scrollView}
        /> */}
       </CustomContainer>
    );
  }
}

HomeScreen.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  
});

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        ...Actions.Creators,
        ...RootActions.Creators,
        ...NotificationActions.Creators,
        ...AuthActions.Creators,
      },
      dispatch,
    ),
  };
};

const withTheming = withTheme(HomeScreen);
const withConnect = connect(mapStateToProps, mapDispatchToProps)(withTheming);
const withLink = withLinkTo(withConnect);
const withReduxForm = reduxForm({
  form: 'home',
})(withLink);

export default withReduxForm;

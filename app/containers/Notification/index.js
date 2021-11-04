/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  H1,
  Grid,
  Col,
  Icon,
  Text,
  CustomContainer,
  Row,
  ScrollView,
  TouchableOpacity,
} from 'components';
import Actions from './actions';
import HomeActions from '../Home/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StyleSheetFactory from './style';
import PropTypes from 'prop-types';
import {View, RefreshControl} from 'react-native';
import {createStructuredSelector} from 'reselect';
import {selectors} from './selectors';
import withLinkTo from 'hoc/withLinkTo';
import withTheme from 'hoc/withTheme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import dayjs from 'dayjs';
import LottieView from 'lottie-react-native';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const getLink = (item) => {
  switch (item.typeId) {
    case 1:
      return `/notification/received_check/${item.dataId}`;
    case 2:
      return `/notification/confirm_check/${item.dataId}`;
    case 3:
      return `/notification/received_check/${item.dataId}`;
  }
};

class NotificationScreen extends Component {
  constructor() {
    super();
    this.state = {
      interactionsComplete: false,
      refreshing: false,
      styles: null,
      themeName: null,
      theme: null,
    };
    this.onEndReachedCalledDuringMomentum = true;
    this.onFocus = null;
  }

  static getDerivedStateFromProps(props, state) {
    if (props.themeContext.themeName !== state.themeName) {
      return {
        styles: StyleSheetFactory(props.themeContext.theme),
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
    const {styles, theme} = this.state;

    return (
      <MenuProvider>
        <CustomContainer
          safe
          style={{
            paddingBottom: 0,
          }}>
          <View
            style={{
              backgroundColor: theme.colors.white,
              height: 70,
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              paddingBottom: 16,
            }}>
            <H1 style={styles.headerTitle}>Inbox</H1>
          </View>
        </CustomContainer>
      </MenuProvider>
    );
  }
}

NotificationScreen.propTypes = {
  
};

const mapStateToProps = createStructuredSelector({
 
});

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        ...Actions.Creators,
        ...HomeActions.Creators,
      },
      dispatch,
    ),
  };
};

const withTheming = withTheme(NotificationScreen);
const withConnect = connect(mapStateToProps, mapDispatchToProps)(withTheming);
const withLink = withLinkTo(withConnect);

export default withLink;

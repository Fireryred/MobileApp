import React, {PureComponent} from 'react';
import AuthNavigation from '../../navigations/authNavigation';
import MainNavigation from '../../navigations/mainNavigation';
// import CorporateNavigation from '../../navigations/corporateNavigation';
import {selectors as AuthSelector} from '../Login/selectors';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ProcessingLoader, Popup} from 'components';
import {selectors} from './selectors';
import {selectors as AuthSelectors} from '../Login/selectors';
import Actions from './actions';
import AuthActions from '../Login/actions';
import {bindActionCreators} from 'redux';
import withTheme from 'hoc/withTheme';

class RootScreen extends PureComponent {
  state = {
    styles: null,
    themeName: null,
    theme: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.themeContext.themeName !== state.themeName) {
      return {
        styles: null,
        themeName: props.themeContext.themeName,
        theme: props.themeContext.theme,
      };
    }

    return null;
  }

  async componentDidMount() {
    // const {checkIfAppVisited} = this.props;
    // checkIfAppVisited();
  }

  render() {
    const {
      isLoggedIn,
      isPopupOpen,
      popupMessage,
      popupStatus,
      popupTitle,
      closePopup,
    } = this.props;

    return (
      <>
        {isPopupOpen && (
          <Popup
            message={popupMessage}
            title={popupTitle}
            status={popupStatus}
            onOk={closePopup}
          />
        )}
        {isLoggedIn ? (
          <MainNavigation />
        ) : (
          <AuthNavigation />
        )}
        </>
    );
  }
}

RootScreen.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isPopupOpen: PropTypes.bool,
  popupMessage: PropTypes.string,
  popupStatus: PropTypes.string,
  popupTitle: PropTypes.string,
  closePopup: PropTypes.func,
  checkIfAppVisited: PropTypes.func,
  isAppVisited: PropTypes.bool,
  userData: PropTypes.object,
  userRoles: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: AuthSelector.selectIsLoggedIn(),
  isLoading: selectors.selectIsLoading(),
  isPopupOpen: selectors.selectIsPopupOpen(),
  popupMessage: selectors.selectPopupMessage(),
  popupStatus: selectors.selectPopupStatus(),
  popupTitle: selectors.selectPopupTitle(),
  userData: AuthSelectors.selectUserData(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        ...Actions.Creators,
        ...AuthActions.Creators,
      },
      dispatch,
    ),
  };
};

const withTheming = withTheme(RootScreen);
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default withConnect(withTheming);

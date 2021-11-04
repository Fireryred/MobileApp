/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Content,
  H1,
  CustomContainer,
  Icon,
  Splash,
  Button,
} from 'components';
import AuthActions from 'containers/Login/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StyleSheetFactory from './style';
import PropTypes from 'prop-types';
import {
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Switch,
  Grid,
  Row,
  Col,
  Input,
} from 'native-base';
import {
  View,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  Linking,
} from 'react-native';
import {selectors as AuthSelectors} from '../Login/selectors';
import {selectors} from './selectors';
import {createStructuredSelector} from 'reselect';
import Actions from './actions';
import withTheme from 'hoc/withTheme';
import {DefaultTheme, CorporateTheme, DarkTheme} from '../../theme/themes';

class MenuScreen extends Component {
  state = {
  };

  handleLogout = () => {
    this.props.temporaryLogout();
  }

  render() {
    const {
      themeContext: {theme},
    } = this.props;

    const styles = StyleSheetFactory(theme);
    return (
      <CustomContainer safe>
        <Container>
          <Content showsVerticalScrollIndicator={false}>
            <View
              style={{
                backgroundColor: theme.colors.white,
                height: 70,
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                paddingBottom: 16,
              }}>
              {/* <H1 style={styles.headerTitle}>Menu</H1> */}
              <TouchableOpacity onPress={this.handleLogout}>
            <Text>Logout</Text>
            </TouchableOpacity>
            </View>
          </Content>
          <View>
          
          </View>
        </Container>
      </CustomContainer>
    );
  }
}

MenuScreen.propTypes = {
  
};

const mapStateToProps = createStructuredSelector({
 
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

const withTheming = withTheme(MenuScreen);
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(withTheming);

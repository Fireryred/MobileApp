/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {View, Text} from 'react-native';
import {Icon} from 'native-base';
import {selectors as NotificationSelectors} from '../../containers/Notification/selectors';

class TabIcon extends React.Component {
  render() {
    const {name, type, style, badged, activeNotificationCount} = this.props;

    if (badged && activeNotificationCount && activeNotificationCount > 0) {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <View
            style={{
              height: 16,
              minWidth: 16,
              backgroundColor: 'red',
              position: 'absolute',
              top: -2,
              right: -4,
              borderRadius: 8,
              zIndex: 100,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 4,
              paddingVertical: 2,
            }}>
            {activeNotificationCount && activeNotificationCount > 0 && (
              <Text
                style={{
                  fontSize: 10,
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {activeNotificationCount}
              </Text>
            )}
          </View>
          <Icon name={name} as={type} style={{...style}} />
        </View>
      );
    } else {
      return <Icon name={name} as={type} style={{...style}} />;
    }
  }
}

TabIcon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  badged: PropTypes.bool,
  activeNotificationCount: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  activeNotificationCount: NotificationSelectors.selectActiveNotificationCount(),
});

const withConnect = connect(mapStateToProps)(TabIcon);
export default withConnect;

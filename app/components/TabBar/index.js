/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View, TouchableNativeFeedback} from 'react-native';
import StyleSheetFactory from './style';
import withTheme from 'hoc/withTheme';
import TabIcon from './tabIcon';
import {Icon} from 'native-base';

class TabBar extends React.Component {
  render() {
    const {
      state,
      descriptors,
      navigation,
      themeContext: {theme},
    } = this.props;

    const activeColor = theme.colors.primary;
    const inactiveColor = theme.colors.gray;
    const styles = StyleSheetFactory(theme);

    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.absoluteView} />
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const currentColor = isFocused ? activeColor : inactiveColor;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              data: {
                routeName: route.name,
              },
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let iconName;
          let iconType = 'Ionicons';
          let iconSize = 24;
          let badged = false;

          if (route.name === 'HomeStack') {
            iconName = isFocused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'CartStack') {
            badged = true;
            iconName = isFocused
              ? 'cart-outline'
              : 'cart-outline';
          } 
          else if (route.name === 'NotificationStack') {
            badged = true;
            iconName = isFocused
              ? 'ios-notifications'
              : 'ios-notifications-outline';
          } else if (route.name === 'MenuStack') {
            iconName = isFocused ? 'ios-person-circle-outline' : 'ios-person-circle-outline';
            // iconType = 'Feather';
          }

          return (
            <View key={index} style={styles.tabContainer}>
              <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple(
                  '#EBEAE8',
                  true,
                  30,
                )}>
                <View style={styles.tabButton}>
                  {badged ? (
                    <TabIcon
                      name={iconName}
                      type={iconType}
                      style={{
                        fontSize: iconSize,
                        color: currentColor,
                      }}
                      badged={badged}
                    />
                  ) : (
                    <Icon
                      name={iconName}
                      type={iconType}
                      style={{
                        fontSize: iconSize,
                        color: currentColor,
                      }}
                    />
                  )}
                </View>
              </TouchableNativeFeedback>
            </View>
          );
        })}
      </SafeAreaView>
    );
  }
}

TabBar.propTypes = {
  activeNotificationCount: PropTypes.number,
  state: PropTypes.object,
  descriptors: PropTypes.object,
  navigation: PropTypes.object,
  themeContext: PropTypes.object,
};

const withTheming = withTheme(TabBar);

export default withTheming;

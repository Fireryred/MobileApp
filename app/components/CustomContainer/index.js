/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import PropTypes from 'prop-types';

const CustomContainer = ({
  style = {},
  children,
  safe = false,
  center = false,
  ...others
}) => {
  if (center) {
    style = {
      justifyContent: 'center',
      alignItems: 'center',
    };
  }

  if (safe) {
    return (
      <SafeAreaView
        style={{...style, flex: 1}}
        {...others}
        edges={['right', 'left', 'top']}>
       {children}
    </SafeAreaView>
    );
  }

  return (
    <View style={{...style, flex: 1}} {...others}>
      {children}
    </View>
  );
};

CustomContainer.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  safe: PropTypes.bool,
  center: PropTypes.bool,
};

export default CustomContainer;

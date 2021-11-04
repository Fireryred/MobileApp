/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import StyleSheetFactory from './style';
import withTheme from 'hoc/withTheme';
import * as Progress from 'react-native-progress';
import staticTheme from 'theme';

const Loader = ({blur = false, opacity = 0.9, themeContext: {theme}}) => {
  const styles = StyleSheetFactory(theme);
  return (
    <>
      <View
        style={[
          styles.outerView,
          {
            opacity: blur ? opacity : 1,
          },
        ]}
      />
      <View style={styles.innerView} />
      <View style={styles.progressContainer}>
        <View style={styles.container}>
          <Image
            source={theme.assets.dcx}
            style={{width: 100, height: 70, marginBottom: 24}}
            resizeMode="contain"
          />
          <Progress.Bar
            width={160}
            color={staticTheme.colors.primary}
            indeterminate
            useNativeDriver
          />
        </View>
      </View>
    </>
  );
};

Loader.propTypes = {
  blur: PropTypes.bool,
  opacity: PropTypes.number,
};

export default withTheme(Loader);

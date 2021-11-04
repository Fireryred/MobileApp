/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Grid, Row, Col} from 'native-base';
import {Icon} from 'native-base';
import StyleSheetFactory from './style';
import PropTypes from 'prop-types';
import withTheme from 'hoc/withTheme';

const getScoreAttr = (score) => {
  let attr = {};

  if (score > 80) {
    attr.color = '#6ce865';
    attr.text = 'Strong';
  } else if (score > 60) {
    attr.color = '#f0cd46';
    attr.text = 'Good';
  } else if (score >= 50) {
    attr.color = 'orange';
    attr.text = 'Fair';
  } else if (score >= 30) {
    attr.color = '#ed4534';
    attr.text = 'Weak';
  } else {
    attr.color = '#ed3833';
    attr.text = 'Very weak';
  }

  return attr;
};

const StackedTextInput = ({
  label,
  labelStyle = {},
  containerStyle = {},
  leftIcon = '',
  leftIconProps = {},
  leftIconStyle = {},
  rightIcon = '',
  rightIconProps = {},
  rightIconStyle = {},
  style = {},
  helperText = '',
  error = false,
  password = false,
  showPassword = false,
  onPressToggle,
  required = false,
  value,
  score = 0,
  showStrengthBar = false,
  moneyFormat = false,
  textInputStyle = {},
  themeContext: {theme},
  ...others
}) => {
  let flexInput = 10;
  if (leftIcon) {
    flexInput -= 1;
  }
  if (rightIcon) {
    flexInput -= 1;
  }

  const errorColor = error ? theme.colors.error : theme.colors.gray;
  const borderWidth = error ? 2 : 1;
  const passwordProp = password
    ? {
        password: !showPassword,
        secureTextEntry: !showPassword,
      }
    : {};

  const scoreAttr = password && showStrengthBar ? getScoreAttr(score) : '';

  const styles = StyleSheetFactory(theme);

  return (
    <View style={{...style}}>
      <Text style={[styles.labelStyle, {...labelStyle, color: errorColor}]}>
        {label}
        {required ? '' : ' (optional)'}
      </Text>
      <Grid
        style={[
          styles.containerStyle,
          {borderBottomColor: errorColor, borderBottomWidth: borderWidth},
          {...containerStyle},
        ]}>
        {!!leftIcon && (
          <Col style={styles.leftIconContainerStyle}>
            <Icon
              name={leftIcon}
              style={[styles.leftIconStyle, {...leftIconStyle}]}
              {...leftIconProps}
            />
          </Col>
        )}

        <Col
          style={{
            height: '100%',
          }}>
          <TextInput
            style={[
              styles.input,
              {...textInputStyle},
              {
                paddingLeft: leftIcon ? theme.metrics.base.sm : 0,
                paddingRight: rightIcon ? theme.metrics.base.sm : 0,
              },
            ]}
            value={value}
            {...others}
            {...passwordProp}
          />
        </Col>

        {!!rightIcon && !password && (
          <Col style={styles.rightIconContainerStyle}>
            <Icon
              name={rightIcon}
              style={[styles.rightIconStyle, {...rightIconStyle}]}
              {...rightIconProps}
            />
          </Col>
        )}

        {password && (
          <Col style={styles.rightIconContainerStyle}>
            <Icon
              name={showPassword ? 'eye-off' : 'eye'}
              style={{color: theme.colors.gray}}
              type="Ionicons"
              onPress={onPressToggle}
            />
          </Col>
        )}
      </Grid>

      {error && (
        <Text
          style={{marginTop: theme.metrics.base.xs, color: theme.colors.error}}>
          {helperText}
        </Text>
      )}

      {showStrengthBar && password && !!value && (
        <>
          <View style={styles.strengthBarContainer}>
            <View
              style={{
                flex: 1,
                width: `${score}%`,
                backgroundColor: scoreAttr.color,
                borderRadius: 30,
              }}
            />
          </View>
          <Text
            style={{color: scoreAttr.color, marginTop: theme.metrics.base.xs}}>
            {scoreAttr.text}
          </Text>
        </>
      )}
    </View>
  );
};

StackedTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  leftIcon: PropTypes.string,
  leftIconProps: PropTypes.object,
  leftIconStyle: PropTypes.object,
  rightIcon: PropTypes.string,
  rightIconProps: PropTypes.object,
  rightIconStyle: PropTypes.object,
  style: PropTypes.object,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  password: PropTypes.bool,
  showPassword: PropTypes.bool,
  onPressToggle: PropTypes.func,
  showStrengthBar: PropTypes.bool,
  value: PropTypes.any,
  score: PropTypes.number,
  moneyFormat: PropTypes.bool,
  textInputStyle: PropTypes.object,
  themeContext: PropTypes.object,
};

export default withTheme(StackedTextInput);

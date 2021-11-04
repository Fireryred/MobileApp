import React from 'react';
import { View } from 'react-native';

const Divider = ({
  orientation = 'horizontal',
  size = 8,
}) => {
  const style = {};
  if (orientation === 'horizontal') {
    style.width = size;
  } else {
    style.height = size;
  }
  return (
    <View 
      style={{
        ...style,
      }}
    />
  )
};

export default Divider;
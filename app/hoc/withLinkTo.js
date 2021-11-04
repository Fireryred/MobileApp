import React from 'react';
import {useLinkTo} from '@react-navigation/native';

function withLinkTo(Component) {
  return function WrappedComponent(props) {
    const linkTo = useLinkTo();
    return <Component {...props} linkTo={linkTo} />;
  };
}

export default withLinkTo;

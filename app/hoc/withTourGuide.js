import React from 'react';
import {
  useTourGuideController,
} from 'rn-tourguide'

function withTourGuide(Component) {
  return function WrappedComponent(props) {
    const tourGuide = useTourGuideController();
    return <Component {...props} tourGuide={tourGuide} />;
  };
}

export default withTourGuide;

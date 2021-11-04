import * as React from 'react';

export const mainNavigationRef = React.createRef();
export const authNavigationRef = React.createRef();
export const dataDeepLink = React.createRef();

export const mainNavigate = (name, params = null) => {
  mainNavigationRef.current?.navigate(name, params);
};

export const authNavigate = (name, params = null) => {
  authNavigationRef.current?.navigate(name, params);
};

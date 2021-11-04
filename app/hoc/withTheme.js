import * as React from 'react';
import {ThemeContext} from '../theme/theme-context';

function withTheme(Component) {
  return function ThemeComponent(props) {
    return (
      <ThemeContext.Consumer>
        {(contexts) => <Component {...props} {...contexts} />}
      </ThemeContext.Consumer>
    );
  };
}

export default withTheme;

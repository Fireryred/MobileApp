import * as React from 'react';
import {ThemeContext} from './theme-context';
import {DefaultTheme} from './themes';

export default class ThemeProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: DefaultTheme,
      themeName: 'DefaultTheme',
      updateTheme: (theme, themeName) => {
        this.setState({theme, themeName});
      },
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={{themeContext: {...this.state}}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import RootScreen from 'containers/Root';
import rootSaga from './sagas';
import ThemeProvider from './theme/ThemeProvider';

const {store} = configureStore();
rootSaga(store);

class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
            <RootScreen />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;

import configureStore from './configureStore';
import createReducer from './reducers';
const rootReducer = createReducer();

export default () => {
  return configureStore(rootReducer);
};

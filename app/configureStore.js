import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {fromJS} from 'immutable';

export default (rootReducer) => {
  const middleware = [];
  const enhancers = [];
  const initialState = fromJS({});
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );
  store.runSaga = sagaMiddleware.run;

  return {store};
};

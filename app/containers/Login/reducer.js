import {fromJS} from 'immutable';
import {createReducer} from 'reduxsauce';
import Actions from './actions';

const INITIAL_STATE = fromJS({
  isLoggedIn: false,
  supportedBiometry: null,
  savedUsers: null,
  selectedSavedUser: null,
  userRoles: [],
  loginProgressStatus: false,
  userData: null,
});

export const doSetAuthSuccess = (state, {data}) => {
  return state.merge({
    isLoggedIn: true,
    userData: data,
  });
};

export const doTemporaryLogout = (state) =>
  state.merge({
    isLoggedIn: false,
    userData: null,
  });

export const doSetLoginProgress = (state, {loginProgressStatus}) =>
  state.merge({
    loginProgressStatus,
  });
  

const {Types} = Actions;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_AUTH_SUCCESS]: doSetAuthSuccess,
  [Types.TEMPORARY_LOGOUT]: doTemporaryLogout,
  [Types.SET_LOGIN_PROGRESS]: doSetLoginProgress,
});

export default reducer;

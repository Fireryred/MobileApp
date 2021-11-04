import {createSelector} from 'reselect';

export const selectAuthDomain = (state) => state.get('auths');

const makeSelectAuth = () =>
  createSelector(selectAuthDomain, (substate) => substate.toJS());

export default makeSelectAuth;

export const selectors = {
  selectIsLoggedIn: () =>
    createSelector(
      selectAuthDomain,
      (windowState) => windowState.toJS().isLoggedIn,
    ),
  selectUserData: () =>
    createSelector(
      selectAuthDomain,
      (windowState) => windowState.toJS().userData,
    ),


  selectLoginProgressStatus: () =>
    createSelector(
      selectAuthDomain,
      (windowState) => windowState.toJS().loginProgressStatus,
    ),
};

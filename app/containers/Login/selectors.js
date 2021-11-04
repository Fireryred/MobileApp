import {createSelector} from 'reselect';

export const selectAuthDomain = (state) => state.get('auth');

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
};

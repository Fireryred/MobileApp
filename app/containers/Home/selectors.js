import {createSelector} from 'reselect';

export const selectHomeDomain = (state) => state.get('home');

const makeSelectHome = () =>
  createSelector(selectHomeDomain, (substate) => substate.toJS());

export default makeSelectHome;

export const selectors = {
  selectDefault: () =>
    createSelector(
      selectHomeDomain,
      (windowState) => windowState.toJS().default,
    ),
};

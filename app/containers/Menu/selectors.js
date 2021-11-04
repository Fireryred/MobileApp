import {createSelector} from 'reselect';

export const selectMenuDomain = (state) => state.get('menu');

const makeSelectMenu = () =>
  createSelector(selectMenuDomain, (substate) => substate.toJS());

export default makeSelectMenu;

export const selectors = {
};

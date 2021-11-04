import {createSelector} from 'reselect';

export const selectRootDomain = (state) => state.get('root');

const makeSelectRoot = () =>
  createSelector(selectRootDomain, (substate) => substate.toJS());

export default makeSelectRoot;

export const selectors = {
  selectIsLoading: () =>
    createSelector(
      selectRootDomain,
      (windowState) => windowState.toJS().isLoading,
    ),
  selectIsPopupOpen: () =>
    createSelector(
      selectRootDomain,
      (windowState) => windowState.toJS().popupOpen,
    ),
  selectPopupMessage: () =>
    createSelector(
      selectRootDomain,
      (windowState) => windowState.toJS().popupMessage,
    ),
  selectPopupStatus: () =>
    createSelector(
      selectRootDomain,
      (windowState) => windowState.toJS().popupStatus,
    ),
  selectPopupTitle: () =>
    createSelector(
      selectRootDomain,
      (windowState) => windowState.toJS().popupTitle,
    ),
};

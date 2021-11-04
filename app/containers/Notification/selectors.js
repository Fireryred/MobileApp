import {createSelector} from 'reselect';

export const selectNotificationDomain = (state) => state.get('notification');

const makeSelectNotification = () =>
  createSelector(selectNotificationDomain, (substate) => substate.toJS());

export default makeSelectNotification;

export const selectors = {
  selectNeedsAction: () =>
    createSelector(
      selectNotificationDomain,
      (windowState) => windowState.toJS().needsAction,
    ),
  selectNotificationsData: () =>
    createSelector(
      selectNotificationDomain,
      (windowState) => windowState.toJS().notificationsData,
    ),
  selectActiveNotificationCount: () =>
    createSelector(
      selectNotificationDomain,
      (windowState) => windowState.toJS().activeNotificationCount,
    ),
  selectReloadInboxProgress: () =>
    createSelector(
      selectNotificationDomain,
      (windowState) => windowState.toJS().reloadInboxProgress,
    ),
};

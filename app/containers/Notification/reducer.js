import {fromJS} from 'immutable';
import {createReducer} from 'reduxsauce';
import Actions from './actions';

const INITIAL_STATE = fromJS({
  needsAction: [],
  getNeedsActionProgress: false,
  notificationsData: [],
  getNotificationProgress: false,
  activeNotificationCount: 0,
  reloadInboxProgress: false,
});

export const doGetInboxNeedsAction = (state) =>
  state.merge({
    getNeedsActionProgress: true,
  });

export const doGetInboxNeedsActionSuccess = (state, {needsActionData}) =>
  state.merge({
    needsAction: needsActionData,
    getNeedsActionProgress: false,
  });

export const doGetInboxNeedsActionStopProgress = (state) =>
  state.merge({
    getNeedsActionProgress: false,
  });

export const doRemoveInboxNeedsAction = (state, {dataId, typeId = null}) => {
  let stateJS = state.toJS();
  let copyNeedsAction = stateJS.needsAction;

  if (typeId) {
    console.log('copyNeedsAction', copyNeedsAction);
  //   const findNeedsAction = copyNeedsAction.filter(
  //     (na) =>
  //       na.typeId === typeId && dataId.toString() === na.dataId.toString(),
  //   );

  //   if (findNeedsAction.length > 0) {
  //     copyNeedsAction = copyNeedsAction.filter(
  //       (nAction) => nAction.id.toString() !== findNeedsAction[0].id.toString(),
  //     );
  //   }
  // } else {
  //   copyNeedsAction = copyNeedsAction.filter(
  //     (nAction) => nAction.check.id.toString() !== dataId.toString(),
  //   );
  }

  return state.merge({
    needsAction: copyNeedsAction,
    activeNotificationCount: stateJS.activeNotificationCount - 1,
  });
};

export const doGetInboxNotification = (state) =>
  state.merge({
    getNotificationProgress: true,
  });

export const doGetInboxNotificationSuccess = (state, {notificationsData}) =>
  state.merge({
    notificationsData,
    getNotificationProgress: false,
  });

export const doGetInboxNotificationStopProgress = (state) =>
  state.merge({
    getNotificationProgress: false,
  });

export const doUpdateInboxNeedsActionCheck = (state, {check}) => {
  let copyNeedsAction = state.toJS().needsAction;
  copyNeedsAction = copyNeedsAction.map((nAct) => {
    if (nAct.check.id === check.id) {
      return {
        ...nAct,
        check,
      };
    }

    return nAct;
  });

  return state.merge({
    needsAction: copyNeedsAction,
  });
};

export const doAddActiveNotificationCount = (state, {count}) =>
  state.merge({
    activeNotificationCount: state.toJS().activeNotificationCount + count,
  });

export const doResetActiveNotificationCount = (state) =>
  state.merge({
    activeNotificationCount: 0,
  });

export const doReloadInbox = (state) =>
  state.merge({
    reloadInboxProgress: true,
  });

export const doReloadInboxStopProgress = (state) =>
  state.merge({
    reloadInboxProgress: false,
  });

const {Types} = Actions;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_INBOX_NEEDS_ACTION]: doGetInboxNeedsAction,
  [Types.GET_INBOX_NEEDS_ACTION_SUCCESS]: doGetInboxNeedsActionSuccess,
  [Types.GET_INBOX_NEEDS_ACTION_STOP_PROGRESS]: doGetInboxNeedsActionStopProgress,
  [Types.REMOVE_INBOX_NEEDS_ACTION]: doRemoveInboxNeedsAction,
  [Types.UPDATE_INBOX_NEEDS_ACTION_CHECK]: doUpdateInboxNeedsActionCheck,

  [Types.GET_INBOX_NOTIFICATION]: doGetInboxNotification,
  [Types.GET_INBOX_NOTIFICATION_SUCCESS]: doGetInboxNotificationSuccess,
  [Types.GET_INBOX_NOTIFICATION_STOP_PROGRESS]: doGetInboxNotificationStopProgress,

  [Types.ADD_ACTIVE_NOTIFICATION_COUNT]: doAddActiveNotificationCount,
  [Types.RESET_ACTIVE_NOTIFICATION_COUNT]: doResetActiveNotificationCount,

  [Types.RELOAD_INBOX]: doReloadInbox,
  [Types.RELOAD_INBOX_STOP_PROGRESS]: doReloadInboxStopProgress,
});

export default reducer;

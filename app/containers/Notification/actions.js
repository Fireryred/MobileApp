import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  getInboxNeedsAction: null,
  getInboxNeedsActionSuccess: ['needsActionData'],
  getInboxNeedsActionStopProgress: null,
  removeInboxNeedsAction: ['dataId', 'typeId'],
  updateInboxNeedsActionCheck: ['check'],

  getInboxNotification: null,
  getInboxNotificationSuccess: ['notificationsData'],
  getInboxNotificationStopProgress: null,

  addActiveNotificationCount: ['count'],
  resetActiveNotificationCount: null,

  reloadInbox: null,
  reloadInboxStopProgress: null,

  getActiveInboxCount: null,
});

const Actions = {
  Types,
  Creators,
};

export default Actions;

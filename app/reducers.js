import {combineReducers} from 'redux-immutable';
import {reducer as home} from 'containers/Home/reducer';
import {reducer as auth} from 'containers/Login/reducer';
import {reducer as formReducer} from 'redux-form/immutable';
import {reducer as root} from 'containers/Root/reducer';
import {reducer as notification} from 'containers/Notification/reducer';
import {reducer as menu} from 'containers/Menu/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    form: formReducer,
    home,
    auth,
    root,
    notification,
    menu,
    ...injectedReducers,
  });

  return rootReducer;
}

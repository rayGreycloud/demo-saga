import { combineReducers } from 'redux';
// for router and form reducers
// import {routerReducer} from 'react-router-reducer';
// import { reducer as formReducer } from 'redux-form';

import layouts from '.layouts';
// Fictional objects representing other state
// import users from './users';
// import auth from './auth';
// import templates from './templates';

// Root reducer
export const reducers = combineReducers({
  // routing: routerReducer,
  // form: formReducer,
  // users,
  // auth,
  // templates,
  layouts
});

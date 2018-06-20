import { call, put } from 'redux-saga/effects';
import LayoutAPI from 'apis/layouts';

export function* layoutsFetchList(action) {
  const response = yield call(LayoutAPI.get);
  const payload = response ? response.data : {};

  // send return object to reducer as payload
  yield put({ type: 'LAYOUT_FETCH', payload });
}

export function* layoutsEdit(action) {
  yield call(LayoutAPI.edit, action.layout);
  yield put({ type: 'LAYOUT_SAVE', layout: action.layout });
  action.callbackSuccess();
}

export function* layoutsAdd(action) {
  yield call(LayoutAPI.add, action.layout);
  yield put({ type: 'LAYOUT_ADD', layout: action.layout });
  action.callbackSuccess();
}

export function* layoutsDelete(action) {
  yield call(LayoutAPI.delete, action.layout);
  yield put({ type: 'LAYOUT_DELETE', layout: action.layout });
  action.callbackSuccess();
}

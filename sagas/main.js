// saga actions and named method functions
import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import {
  layoutsFetchList,
  layoutsAdd,
  layoutsEdit,
  layoutsDelete
} from './layouts';

import { takeLatest, takeEvery } from 'redux-saga/effects';

import {getMenuSaga} from "./menuSaga"

import * as types from '../actions';


export default function* watchCart() {

  yield takeLatest(types.GET_MENU, getMenuSaga);
  
}


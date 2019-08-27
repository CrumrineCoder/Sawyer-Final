import { put, call } from 'redux-saga/effects';
import { getMenuService } from '../services/menuService';

import * as types from '../actions';

export function* getMenuSaga(payload) {
    try {
        const response = yield call(getMenuService, payload);
        yield put({ type: types.GET_MENU_SUCCESS, response });
    } catch (error) {
        yield put({ type: types.GET_MENU_ERROR, error });
    }
}
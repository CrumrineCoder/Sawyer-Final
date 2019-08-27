import { fork } from 'redux-saga/effects';
import watchCart from './watchers';

export default function* startForman() {
  yield fork(watchCart);
}
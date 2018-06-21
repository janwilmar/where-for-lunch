import { all } from 'redux-saga/effects';

import placeSagas from './placeSagas';
import placeDetailsSagas from './placeDetailsSagas';

export default function* rootSagas() {
  yield all([
    placeSagas(),
    placeDetailsSagas(),
  ]);
}

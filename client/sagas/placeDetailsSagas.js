import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceDetails } from 'services/placeApi';
import placeActions from 'actions/placeActions';
import {
  FETCH_DETAILS,
} from 'actions/placeActionTypes';

function* fetchPlaceDetails(action) {
  try {
    const placedetails = yield call(getPlaceDetails, action.payload);
    yield put(placeActions.setDetails(placedetails));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeDetailsSagas() {
  yield takeEvery(FETCH_DETAILS, fetchPlaceDetails);
}

export default placeDetailsSagas;

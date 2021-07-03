import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import * as actions from './actions';
import types from '../types';
// import IDriver from '../../../interfaces/driver';

function* fetchDrivers({ payload }: any): any {
  try {
    const response = yield call(api.get, '/drivers');
    yield put(actions.fetchDriverSuccess(response.data));
  } catch (e) {
    toast.error(e.response.data.msg);
  }
}

export default all([takeLatest(types.FETCH_DRIVERS_REQUEST, fetchDrivers)]);

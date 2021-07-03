import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import * as actions from './actions';
import types from '../types';
// import IDriver from '../../../interfaces/driver';

function* fetchTravels({ payload }: any): any {
  try {
    const response = yield call(api.get, '/travels');
    yield put(actions.fetchTravelsSuccess(response.data));
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

export default all([takeLatest(types.FETCH_TRAVELS_REQUEST, fetchTravels)]);

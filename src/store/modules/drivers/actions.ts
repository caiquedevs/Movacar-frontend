import types from '../types';
// import IDriver from '../../../interfaces/driver';

// Listar motoristas ------------------------------
export function fetchDriverRequest(payload: any) {
  return {
    type: types.FETCH_DRIVERS_REQUEST,
    payload,
  };
}

export function fetchDriverSuccess(payload: any) {
  return {
    type: types.FETCH_DRIVERS_SUCCESS,
    payload,
  };
}

export function fetchDriverError() {
  return {
    type: types.FETCH_DRIVERS_ERROR,
  };
}

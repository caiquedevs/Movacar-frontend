import types from '../types';

// Listar viagens ------------------------------
export function fetchTravelsRequest(payload: any) {
  return {
    type: types.FETCH_TRAVELS_REQUEST,
    payload,
  };
}

export function fetchTravelsSuccess(payload: any) {
  return {
    type: types.FETCH_TRAVELS_SUCCESS,
    payload,
  };
}

export function fetchTravelsError() {
  return {
    type: types.FETCH_TRAVELS_ERROR,
  };
}

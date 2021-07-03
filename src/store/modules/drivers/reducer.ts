import types from '../types';
import IDriver from '../../../interfaces/driver';

interface IState {
  drivers: IDriver[];
}

const initialState: IState = {
  drivers: [],
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.FETCH_DRIVERS_SUCCESS: {
      const newState = { ...state };
      newState.drivers = [...action.payload];
      return newState;
    }

    default: {
      return state;
    }
  }
}

import types from '../types';
import IDriver from '../../../interfaces/driver';

interface IState {
  travels: IDriver[];
}

const initialState: IState = {
  travels: [],
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.FETCH_TRAVELS_SUCCESS: {
      const newState = { ...state };
      newState.travels = [...action.payload];
      return newState;
    }

    default: {
      return state;
    }
  }
}

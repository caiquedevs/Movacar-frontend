import { combineReducers } from 'redux';

import driverReducer from './drivers/reducer';
import travelReducer from './travels/reducer';

export default combineReducers({
  driverReducer,
  travelReducer,
});

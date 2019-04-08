import { combineReducers } from 'redux';
import location from './location';
import listing from './listing';

const rootReducer = combineReducers({
  location,
  listing,
});

export default rootReducer;

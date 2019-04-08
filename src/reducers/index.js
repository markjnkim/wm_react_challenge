import { combineReducers } from 'redux';
import locationListing from './location';
import listing from './listing';

const rootReducer = combineReducers({
  locationListing,
  listing,
});

export default rootReducer;

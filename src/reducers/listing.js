import { LIST_SELECTED } from '../constants/ActionTypes';

const listingDetail = (state = { selectedListing: null }, action) => {
  switch (action.type) {
    case LIST_SELECTED:
      return {
        ...state,
        selectedListing: action.payload,
      };
    default:
      return state;
  }
}

export default listingDetail;
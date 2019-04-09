import { DETAIL_SELECTED } from '../constants/ActionTypes';

const listingDetail = (state = { selectedDetail: null }, action) => {
  switch (action.type) {
    case DETAIL_SELECTED:
      return {
        ...state,
        selectedDetail: action.payload,
      };
    default:
      return state;
  }
}

export default listingDetail;
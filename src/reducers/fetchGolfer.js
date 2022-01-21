import { FETCH_GOLFER, FETCH_GOLFER_NAME } from '../actions/types';

export default function serverStatusReducer(state = [], action) {
  switch (action.type) {
    case FETCH_GOLFER:
      return { ...state, golfer: action.payload };
    case FETCH_GOLFER_NAME:
      return { ...state, golferName: action.payload };
    default:
      return state;
  }
}

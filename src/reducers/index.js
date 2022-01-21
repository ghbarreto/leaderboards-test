import { combineReducers } from 'redux';
import fetchGolfer from './fetchGolfer';

export default combineReducers({
  golfer: fetchGolfer,
});
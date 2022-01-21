import golfer from '../api/golf';
import { FETCH_GOLFER, FETCH_GOLFER_NAME, FETCH_GOLFER_SCORE } from './types';

export const fetchGolfer = () => async dispatch => {
  const response = await golfer.get(`/api/1/events/1000/leaderboard/`);
  dispatch({ type: FETCH_GOLFER, payload: response.data });
};

export const fetchGolferName = () => async dispatch => {
  const response = await golfer.get(`/api/1/players/`);
  dispatch({ type: FETCH_GOLFER_NAME, payload: response.data });
};

export const fetchGolferScores = player_id => async dispatch => {
  const response = await golfer.get(`/api/1/players/${player_id}`);
  dispatch({ type: FETCH_GOLFER_SCORE, payload: response.data });
};

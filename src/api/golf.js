import axios from 'axios';

const key = 'addkey';

export default axios.create({
  baseURL: 'https://leaderboard-techtest.herokuapp.com/',
  headers: {
    "Authorization": key
  }
});
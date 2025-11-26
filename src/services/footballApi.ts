import axios from 'axios';

const footballApi = axios.create({
  baseURL: 'https://api.football-data.org/v4/', 
  headers: {
    'X-Auth-Token': 'ff34e45f2b0b46e98add24ebc0aa1c89',
  }
});

export default footballApi;
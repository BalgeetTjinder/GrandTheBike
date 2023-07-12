import axios from 'axios';
import config from 'Src/config';

const baseURL = config.BASE_URL;

const requestApi = (token) => {
  return axios.create({
    baseURL, 
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default requestApi;
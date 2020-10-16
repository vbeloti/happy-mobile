import axios from 'axios';
import url from '../../.env';

const api = axios.create({
  baseURL: 'http://192.168.0.150:3333',
});

export default api;

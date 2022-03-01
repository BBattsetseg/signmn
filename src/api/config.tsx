import axios from 'axios';
import { getConfigUrls } from './urls';

export const getConfig = (name: string) => {
  const url = getConfigUrls();

  return axios.get(url + name);
};

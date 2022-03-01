import axios from 'axios';
import { checkUserExist, loginWebUrl } from './urls';

export const checkuser = (phone: number) => {
  const url = checkUserExist();
  return axios.post(url, { phone_number: phone });
};
export const loginWeb = (phone: number, password: string) => {
  const url = loginWebUrl();
  return axios.post(url, { phone_number: phone, password: password });
};

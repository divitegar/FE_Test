import callAPI from '../config/api';
import { LoginTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api';

export async function setLogin(data: LoginTypes) {
  const url = `${ROOT_API}/${API_VERSION}/login`;

  return callAPI({ url, method: 'POST', data });
}

import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API2;
const API_VERSION = 'api';

export async function getRuas() {
  const url = `${ROOT_API}/${API_VERSION}/master-data/ruas`;

  return callAPI({ url, method: 'GET', token: true });
}

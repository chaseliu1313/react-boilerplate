import axios, { AxiosInstance } from 'axios';
import { BASE_URL, bearere } from './property';
//this is an example of having a network service instance

export default class NetworkService {
  token: string;

  client: AxiosInstance;

  constructor() {
    this.token = '';

    this.client = axios.create({
      headers: {
        'content-type': 'application/json',
        'X-PACKETID': 1
      }
    });
  }

  async get(subURL: string, params?: object): Promise<unknown> {
    console.log('token', this.token);
    if (this.token === '') return Promise.reject('Token is missing');
    try {
      const res = await this.client.get(this.makeURL(subURL).href, {
        params,
        headers: {
          'content-type': 'application/json',

          Authorization: this.token
        }
      });
      return res;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async post(subURL: string, body: object): Promise<unknown> {
    if (this.token === '') return Promise.reject('Token is missing');
    try {
      const res = await this.client.post(this.makeURL(subURL).href, body, {
        headers: {
          'content-type': 'application/json',

          Authorization: this.token
        }
      });
      return res;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  makeURL(subURL: string): URL {
    return new URL(subURL, BASE_URL);
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string) {
    this.token = bearere + token;
  }
}

import { getHost } from "./helper";
import { message } from 'antd';

interface RequestInit {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  referrerPolicy?: ReferrerPolicy;
  data?: any,
}

const PrePath = '/api';

function objectToQueryString(obj: Record<string, string | number>): string {
  const keyValuePairs: string[] = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== null && value !== undefined) {
        keyValuePairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`);
      }
    }
  }
  return keyValuePairs.join('&');
}

const request = <T>(url: string, configs: RequestInit): Promise<T> => {
  const { method } = configs;
  if (method === 'get') {
    url += `?${objectToQueryString(configs.data)}`;
  } else if (method === 'post') {
    configs.headers = {
      'Content-Type': 'application/json',
      ...configs.headers,
    };
    configs.body = JSON.stringify(configs.data);
  }

  delete configs.data;

  return fetch(getHost(PrePath + url), configs).then(response => {
    if (!response.ok) {
      message.error('server error');
      if (!/^2\d{2}$/.test(String(response.status))) {
        throw new Error('NestJS server error');
      } else {
        throw new Error('Network response was not ok');
      }
    }
    return response.json().then(data => data.data);
  });
};

class Http {
  constructor() {}

  public static get<T>(url: string, configs?: RequestInit) {
    return request<T>(url, {
      ...configs,
      method: 'get',
    });
  }

  public static post<T>(url: string, configs?: RequestInit) {
    return request<T>(url, {
      ...configs,
      method: 'post',
    });
  }
}


export default Http;

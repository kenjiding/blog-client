import { getHost } from "./helper";
import { message } from 'antd';
import { useUserStore } from '@/store/user';

interface RequestInit {
  method?: string;
  headers?: {
    [key: string]: string;
  };
  body?: BodyInit | null;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  referrerPolicy?: ReferrerPolicy;
  data?: any,
  ignore?: boolean
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

class Http {
  constructor() {}
  public static request<T>(url: string, configs: RequestInit): Promise<T> {
    if(!configs.headers) configs.headers = {};
    const state = useUserStore.getState();
    if(state.userData?.access_token) {
      configs.headers.Authorization = `Bearer ${state.userData?.access_token}`;
    }

    const method = configs.method?.toLowerCase();
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
  
    return fetch(getHost(PrePath + url), {
      cache: 'no-cache',
      ...configs,
    }).then(response => {
      if (!response.ok) {
        !configs.ignore && message.error('server error');
        return Promise.reject({
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
        });
      }
      return response.json().then(data => data.data);
    });
  };

  public static get<T>(url: string, configs?: RequestInit) {
    const requestConfigs: RequestInit = {
      method: 'GET',
      ...configs,
    };
    return Http.request<T>(url, requestConfigs);
  }

  public static post<T>(url: string, configs?: RequestInit) {
    const requestConfigs: RequestInit = {
      method: 'POST',
      ...configs,
    };
    return Http.request<T>(url, requestConfigs);
  }
}


export default Http;

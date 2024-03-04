import axios, {
  AxiosInstance, 
  AxiosRequestConfig, 
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

// axios.defaults.baseURL = process.env.REACT_APP_API_URL + '/';
axios.defaults.headers.head['Content-Type'] = 'application/json;chartset=utf-8';
axios.defaults.timeout = 1000 * 60;

export interface IResponse<T = any> {
  code: number;
  message: string;
  data: T
}

let refreshTokenRquesting = false;

const axiosInstance: AxiosInstance = axios.create({
  timeout: 10000,
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    const { data } = res;
    if (data.code === 500) {
      return Promise.reject(data);
    }
    return data.data;
  },
  async (err: any) => {
    const {
      response: { status, data }
    } = err;
    const originalRequest = err.config;
    return Promise.reject(err.response.data);
  }
);

const http = <T>(configs: AxiosRequestConfig): Promise<T> => {
  const { method } = configs;
  if (method === 'get') {
    configs.params = configs.data;
    delete configs.data;
  }

  return axiosInstance.request(configs);
};

export default http;

import { get } from 'lodash-es';

export enum DeviceType {
  Mobile = 'Mobile',
  Pad = 'Pad',
  Desktop = 'Desktop'
}
/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
interface IFetchRes {
  status: number;
  message: string;
  [propName: string]: any;
}
export function catchError<T, U extends IFetchRes> (
  promise: Promise<T>,
  errorExt?: object
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data]) // 执行成功，返回数组第一项为 null。第二个是结果。
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }
      return [err, undefined]; // 执行失败，返回数组第一项为错误信息，第二项为 undefined
    });
}

export const getHost = (path?: string) => {
  const host = process.env.DOCKER_SERVER_HOST || process.env.NEXT_PUBLIC_SERVER_HOST;
  return path ? `${host}${path}` : `${host}`;
}


export function localStorageGetter(name: string, key?: string) {
  try {
    const storage = localStorage.getItem(name);
    if (!storage) return '';
    const formatStorage = JSON.parse(storage);
    return key ? get(formatStorage, key) : formatStorage;
  } catch(e) {
  }
}

export function localStorageSetter<T>(name: string, data: T) {
  try {
    localStorage.setItem(name, JSON.stringify(data));
  } catch(e) {
  }
}

export function detectDevice(fn: (data: any) => void, deps: DeviceType[]) {
  const ua = 'navigator.userAgent';

  const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
  const isTablet = /iPad|Tablet|Android/i.test(ua) && !/Mobile/i.test(ua);
  const isDesktop = !isMobile && !isTablet;

  if(isMobile && deps.includes(DeviceType.Mobile)) {
    return fn;
  } else if(isTablet && deps.includes(DeviceType.Pad)) {
    return fn;
  } else if(isDesktop && deps.includes(DeviceType.Desktop)) {
    return fn;
  }
  return () => {};
}

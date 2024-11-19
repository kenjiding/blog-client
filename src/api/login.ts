import Http from '@/utils/http';

export const login = (data: any) => Http.post<{access_token: string}>(`/auth/login`, { data, ignore: true });

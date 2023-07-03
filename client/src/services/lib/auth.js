import { axiosClient } from '../apiClient';

export const signupService = (data) => axiosClient.post(`/auth/signup`, data);

export const loginService = (data) => axiosClient.post(`/auth/login`, data);

export const isAuthenticated = async () =>
  axiosClient.get('/auth/isauthenticated');

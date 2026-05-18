import { request } from '../../../shared/api/client';

export const loginRequest = (data: { input: string; password: string }) => {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
export const sendCodeRequest = (data: { email: string; reset: boolean }) => {
  return request('/auth/send-code', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
export const registerRequest = (data: {
  username: string;
  email: string;
  password: string;
  verificationCode: string;
}) => {
  return request('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
export const resetRequest = (data: {
  email: string;
  password: string;
  verificationCode: string;
}) => {
  return request('/auth/reset-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

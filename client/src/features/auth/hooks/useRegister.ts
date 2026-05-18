import { useState } from 'react';
import { registerRequest } from '../api/auth';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validate = (
    username: string,
    email: string,
    password: string,
    code: string,
  ) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username || !email || !password || !code) {
      return 'Fill all fields';
    }

    if (!usernameRegex.test(username)) {
      return 'Username must be 3-20 chars (letters, numbers, _)';
    }

    if (!emailRegex.test(email)) {
      return 'Invalid email';
    }

    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }

    if (code.length !== 6) {
      return 'Invalid verification code';
    }

    return '';
  };

  const register = async (
    username: string,
    email: string,
    password: string,
    verificationCode: string,
  ) => {
    const validationError = validate(
      username,
      email,
      password,
      verificationCode,
    );

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError('');

      const res = await registerRequest({
        username,
        email,
        password,
        verificationCode,
      });

      return res;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, setError };
};

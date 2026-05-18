import { useState } from 'react';
import { loginRequest } from '../api/auth';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validate = (input: string, password: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

    if (!input || !password) {
      return 'Fill all fields';
    }

    if (!emailRegex.test(input) && !usernameRegex.test(input)) {
      return 'Enter valid email or username';
    }

    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }

    return '';
  };

  const login = async (input: string, password: string) => {
    const validationError = validate(input, password);

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError('');

      const res = await loginRequest({ input, password });
      return res;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

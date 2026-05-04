import { useState } from "react";
import { resetRequest } from "../api/auth";

export const useReset = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = (
    email: string,
    password: string,
    code: string
  ) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password || !code) {
      return "Fill all fields";
    }

    if (!emailRegex.test(email)) {
      return "Invalid email";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }

    if (code.length !== 6) {
      return "Invalid verification code";
    }

    return "";
  };

  const reset = async (
    email: string,
    password: string,
    verificationCode: string
  ) => {
    const validationError = validate(email, password, verificationCode);

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await resetRequest({
        email,
        password,
        verificationCode,
      });

      return res;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { reset, loading, error, setError};
};
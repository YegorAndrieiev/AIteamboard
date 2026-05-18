import { useState } from 'react';
import { Input } from '../features/auth/components/Input';
import { Button } from '../features/auth/components/Button';
import { useLogin } from '../features/auth/hooks/useLogin';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, error, loading } = useLogin();

  const handleLogin = async () => {
    const res = await login(input, password);

    if (res) {
      navigate('/tasks');
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome back</h2>

        <Input
          placeholder="Email or Username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div style={styles.error}>{error}</div>}

        <Button
          title={loading ? 'Loading...' : 'Login'}
          onClick={handleLogin}
        />
        <p style={styles.resetText}>
          <a href="/reset" style={styles.resetLink}>
            Forgot password?
          </a>
        </p>
        <p style={styles.footerText}>
          Don’t have an account?{' '}
          <a style={styles.link} href="/register">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};
const styles = {
  wrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f9fafb',
  },
  card: {
    width: '360px',
    padding: '24px',
    borderRadius: '12px',
    background: '#fff',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: '16px',
    textAlign: 'center' as const,
  },
  error: {
    background: '#fee2e2',
    color: '#b91c1c',
    padding: '10px',
    borderRadius: '6px',
    marginBottom: '10px',
    fontSize: '14px',
  },
  footerText: {
    fontSize: '14px',
    textAlign: 'center' as const,
    color: '#6b7280',
    marginTop: '-10px',
  },
  link: {
    color: '#2563eb',
    cursor: 'pointer',
    fontWeight: 500,
    textDecoration: 'none',
  },
  resetText: {
    marginTop: '10px',
    textAlign: 'center' as const,
  },
  resetLink: {
    color: '#2563eb',
    fontSize: '14px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

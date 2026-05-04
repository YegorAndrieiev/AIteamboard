import { useEffect, useState } from "react";
import { Input } from "../features/auth/components/Input";
import { Button } from "../features/auth/components/Button";
import { sendCodeRequest } from "../features/auth/api/auth";
import { useRegister } from "../features/auth/hooks/useRegister";
export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const [timer, setTimer] = useState(0);
  const [sendingCode, setSendingCode] = useState(false);

  const { register, error, loading, setError} = useRegister();
  useEffect(() => {
    const seconds = parseInt(localStorage.getItem("timeRes") || "0", 10);
    setTimer(seconds);
  }, []);
  useEffect(() => {
    if (timer > 0) {
      localStorage.setItem("timeRes", timer.toString());
    } else {
      localStorage.removeItem("timeRes");
    }
  }, [timer]);
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);
  const handleSendCode = async () => {
    if (!email) return;

    try {
      setSendingCode(true);
      await sendCodeRequest({ email, reset: false });
      setTimer(60);
    } catch (err: any) {
      console.log("ERROR OBJECT:", err);
      setError(err.message);
    } finally {
      setSendingCode(false);
    }
  };

  const handleRegister = async () => {
    const res = await register(username, email, password, code);
    if (res) {
      window.location.href = "/";
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create account</h2>

        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Verification code"
          value={code}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, "");
            if (val.length <= 6) setCode(val);
          }}
        />

        {timer > 0 ? (
          <div style={styles.timer}>Resend in {timer}s</div>
        ) : (
          <button style={styles.codeBtn} onClick={handleSendCode} disabled={!email || sendingCode}>
            {sendingCode ? "Sending..." : "Get code"}
          </button>
        )}
        {error && <div style={styles.error}>{error}</div>}
        <Button
          title={loading ? "Loading..." : "Register"}
          onClick={handleRegister}
        />
        <p style={styles.footerText}>
          Already have an account?{" "}
          <a style={styles.link} href="/">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};
const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f9fafb",
  },
  card: {
    width: "360px",
    padding: "24px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column" as const,
  },
  title: {
    marginBottom: "16px",
    textAlign: "center" as const,
  },
  error: {
    background: "#fee2e2",
    color: "#b91c1c",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "10px",
    fontSize: "14px",
  },
  footerText: {
    marginTop: "12px",
    fontSize: "14px",
    textAlign: "center" as const,
    color: "#6b7280",
  },
  link: {
    color: "#2563eb",
    cursor: "pointer",
    fontWeight: 500,
    textDecoration: "none",
  },
  codeBtn: {
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    background: "#f3f4f6",
    cursor: "pointer",
  },
  timer: {
    marginBottom: "10px",
    textAlign: "center" as const,
    color: "#6b7280",
    fontSize: "14px",
  },
};
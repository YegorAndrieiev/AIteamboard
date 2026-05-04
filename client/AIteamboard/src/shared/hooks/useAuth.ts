import { useEffect, useState } from "react";
import { getMeRequest } from "../api/client";
import type { Role } from "../types";
export const useAuth = () => {
  const [user, setUser] = useState<{id:string;username:string;role:Role} | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getMeRequest();
        setUser(data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  return { user, loading};
};
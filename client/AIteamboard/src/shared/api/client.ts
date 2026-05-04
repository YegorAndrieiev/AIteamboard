const BASE_URL = import.meta.env.VITE_API_URL;

export const request = async (url: string, options?: RequestInit) => {
  let res = await fetch(`${BASE_URL}${url}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (res.status === 401) {
    const refreshRes = await fetch(`${BASE_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });

    if (refreshRes.ok) {
      res = await fetch(`${BASE_URL}${url}`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
        ...options,
      });
    } else {
      window.location.href = "/";
      return;
    }
  }
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "Request failed");
  }
  return data;
};
export const getMeRequest = () => {
  return request("/auth/me", {
    method: "GET",
  });
};
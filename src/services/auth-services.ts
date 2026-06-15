import { apiFetch } from "./api-utility";

import { endpoints } from "./endpoints";

import { LoginResponse } from "@/types/auth";

const { LOGIN, LOGOUT } = endpoints;

export const Login = async (payload: {
  userName: string;
  password: string;
}) => {
  try {
    const response: LoginResponse = await apiFetch(LOGIN, {
      method: "POST",
      body: JSON.stringify(payload),
      credentials: "include", // Include cookies for authentication
    });

    return response;
  } catch (err) {
    console.log("Error during login:", err);
    throw err;
  }
};

export const logout = async () => {
  try {
    const response = await apiFetch(LOGOUT, {
      method: "POST",
      credentials: "include",
    });

    return response;
  } catch (err) {
    console.log("Error during logout:", err);
    throw err;
  }
};

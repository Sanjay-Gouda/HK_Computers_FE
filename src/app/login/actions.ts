"use server";

import { cookies } from "next/headers";

import { Login } from "@/services/ajax-services";

type LoginPayload = {
  userName: string;
  password: string;
};

export async function loginAction(payload: LoginPayload) {
  const res = await Login(payload);

  if (res.status === "SUCCESS" && res.token) {
    const cookieStore = await cookies();

    cookieStore.set("token", res.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
  }

  return res;
}

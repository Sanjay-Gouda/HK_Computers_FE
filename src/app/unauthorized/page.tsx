"use client";

import { useRouter } from "next/navigation";

export default function Unauthorized() {
  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Unauthorized</h1>
      <p>Please log in to access this page.</p>

      <button
        onClick={() => router.push("/login")}
        className="rounded bg-black px-4 py-2 text-white"
      >
        Login
      </button>
    </div>
  );
}
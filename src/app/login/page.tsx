

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-sm font-medium">Username</label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium">Password</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <Button type="submit" className="mt-4 w-full">Login</Button>
      </form>
    </div>
  );
}



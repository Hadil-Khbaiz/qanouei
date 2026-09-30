"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      console.error("LOGIN ERROR:", error);
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin/orders");
  };

  return (
    <main className="min-h-screen bg-[#f5f1e8] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-serif text-[#2d241f] mb-2">
          Admin Login
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Sign in to manage QANOUEI orders.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-[#2d241f] mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#2d241f]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#2d241f] mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#2d241f]"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2d241f] text-white py-3 hover:bg-[#40342d] disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import { User, Eye, EyeOff } from "lucide-react";
import { supabase } from "../../lib/supabase";

type Order = {
  id: string;
  customer_name: string;
  items: any;
  total: number;
  status: string;
  created_at: string;
};

export default function AccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isCreating, setIsCreating] = useState(false);
  const [user, setUser] = useState<any>(null);

  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);

      if (user) {
        loadOrders(user.id);
      }
    };

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;

      setUser(currentUser);

      if (currentUser) {
        loadOrders(currentUser.id);
      } else {
        setOrders([]);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loadOrders = async (userId: string) => {
    setOrdersLoading(true);

    const { data, error } = await supabase
      .from("orders")
      .select("id, customer_name, items, total, status, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("ORDERS ERROR:", error);
      setOrders([]);
      setOrdersLoading(false);
      return;
    }

    setOrders(data || []);
    setOrdersLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    if (isCreating) {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        setLoading(false);
        return;
      }

      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
      });

      if (error) {
        setError(error.message);
      } else {
        setMessage(
          "Account created. Please check your email to confirm your account."
        );

        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) {
        setError(error.message);
      } else {
        setMessage("You are now signed in.");
      }
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();

    setUser(null);
    setOrders([]);
    setMessage("You have been signed out.");
  };

  const switchMode = () => {
    setIsCreating(!isCreating);

    setError("");
    setMessage("");

    setPassword("");
    setConfirmPassword("");

    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">

      {/* Header */}
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="QANOUEI"
              className="h-10 w-auto object-contain"
            />

            <span className="text-lg font-semibold tracking-[0.22em]">
              QANOUEI
            </span>
          </a>

          <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.15em]">

            <a
              href="/shop"
              className="transition-opacity hover:opacity-50"
            >
              Shop
            </a>

            <a
              href="/cart"
              className="transition-opacity hover:opacity-50"
            >
              Cart
            </a>

          </nav>

        </div>
      </header>

      {/* Account */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-16">

        <div className="mb-12">

          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            QANOUEI
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
            My Account
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            Sign in to view your orders and manage your account.
          </p>

        </div>

        {!user ? (

          <div className="grid gap-8 md:grid-cols-2">

            {/* Account Form */}
            <div className="border border-black/10 bg-white p-8 md:p-10">

              <div className="flex items-center gap-3">

                <User
                  size={18}
                  strokeWidth={1.5}
                />

                <h2 className="text-lg font-medium">
                  {isCreating ? "Create Account" : "Sign In"}
                </h2>

              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Email */}
                <div>

                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">
                    Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full border border-black/15 bg-white px-4 py-4 text-sm outline-none transition-colors focus:border-black"
                  />

                </div>

                {/* Password */}
                <div>

                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">
                    Password
                  </label>

                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your password"
                      required
                      minLength={6}
                      className="w-full border border-black/15 bg-white px-4 py-4 pr-12 text-sm outline-none transition-colors focus:border-black"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-black"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >

                      {showPassword ? (
                        <EyeOff
                          size={18}
                          strokeWidth={1.5}
                        />
                      ) : (
                        <Eye
                          size={18}
                          strokeWidth={1.5}
                        />
                      )}

                    </button>

                  </div>

                </div>

                {/* Confirm Password */}
                {isCreating && (

                  <div>

                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">
                      Confirm Password
                    </label>

                    <div className="relative">

                      <input
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        value={confirmPassword}
                        onChange={(e) =>
                          setConfirmPassword(e.target.value)
                        }
                        placeholder="Confirm your password"
                        required
                        minLength={6}
                        className="w-full border border-black/15 bg-white px-4 py-4 pr-12 text-sm outline-none transition-colors focus:border-black"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-black"
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                      >

                        {showConfirmPassword ? (
                          <EyeOff
                            size={18}
                            strokeWidth={1.5}
                          />
                        ) : (
                          <Eye
                            size={18}
                            strokeWidth={1.5}
                          />
                        )}

                      </button>

                    </div>

                  </div>

                )}

                {/* Error */}
                {error && (
                  <p className="text-sm text-red-600">
                    {error}
                  </p>
                )}

                {/* Message */}
                {message && (
                  <p className="text-sm text-green-700">
                    {message}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#171512] px-6 py-4 text-xs uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-80 disabled:opacity-50"
                >

                  {loading
                    ? "Please wait..."
                    : isCreating
                    ? "Create Account"
                    : "Sign In"}

                </button>

              </form>

              {/* Switch */}
              <button
                type="button"
                onClick={switchMode}
                className="mt-6 w-full text-xs text-zinc-500 transition-opacity hover:opacity-50"
              >

                {isCreating
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Create one"}

              </button>

            </div>

            {/* Information */}
            <div className="border border-black/10 bg-white p-8 md:p-10">

              <h2 className="text-lg font-medium">
                Your QANOUEI Account
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Create an account to keep track of your orders and make
                future purchases easier.
              </p>

              <div className="mt-8 space-y-4 text-sm text-zinc-500">

                <p>• View your orders</p>
                <p>• Keep your account information</p>
                <p>• Make future purchases easier</p>

              </div>

            </div>

          </div>

        ) : (

          <>
            {/* Signed In */}
            <div className="border border-black/10 bg-white p-8 md:p-10">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Signed in as
                  </p>

                  <p className="mt-2 text-lg">
                    {user.email}
                  </p>

                </div>

                <button
                  onClick={handleLogout}
                  className="border border-black/20 px-5 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-[#171512] hover:text-white"
                >
                  Logout
                </button>

              </div>

            </div>

            {/* Orders */}
            <div className="mt-12 border border-black/10 bg-white p-8 md:p-10">

              <h2 className="text-lg font-medium">
                My Orders
              </h2>

              {ordersLoading ? (

                <p className="mt-6 text-sm text-zinc-500">
                  Loading your orders...
                </p>

              ) : orders.length === 0 ? (

                <p className="mt-6 text-sm leading-7 text-zinc-500">
                  You have no orders yet.
                </p>

              ) : (

                <div className="mt-8 space-y-6">

                  {orders.map((order) => (

                    <div
                      key={order.id}
                      className="border border-black/10 p-6"
                    >

                      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                        <div>

                          <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                            Order
                          </p>

                          <p className="mt-2 text-sm break-all">
                            {order.id}
                          </p>

                          <p className="mt-2 text-xs text-zinc-500">
                            {new Date(
                              order.created_at
                            ).toLocaleString()}
                          </p>

                        </div>

                        <span className="w-fit bg-yellow-100 px-3 py-1 text-xs uppercase tracking-[0.12em] text-yellow-800">
                          {order.status}
                        </span>

                      </div>

                      <div className="mt-6 border-t border-black/10 pt-6">

                        <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                          Items
                        </p>

                        <div className="mt-4 space-y-3">

                          {Array.isArray(order.items) &&
                            order.items.map((item: any) => (

                              <div
                                key={item.id}
                                className="flex items-center justify-between gap-4 text-sm"
                              >

                                <div>

                                  <p className="font-medium">
                                    {item.name}
                                  </p>

                                  <p className="mt-1 text-xs text-zinc-500">
                                    Quantity: {item.quantity}
                                  </p>

                                </div>

                                <p>
                                  {(
                                    item.price *
                                    item.quantity
                                  ).toFixed(3)}{" "}
                                  KD
                                </p>

                              </div>

                            ))}

                        </div>

                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-6">

                        <span className="text-sm">
                          Total
                        </span>

                        <span className="text-lg font-medium">
                          {Number(order.total).toFixed(3)} KD
                        </span>

                      </div>

                    </div>

                  ))}

                </div>

              )}

            </div>
          </>

        )}

      </section>

    </main>
  );
}
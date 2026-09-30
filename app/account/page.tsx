import { User } from "lucide-react";

export default function AccountPage() {
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

        <div className="grid gap-8 md:grid-cols-2">

          {/* Sign In */}
          <div className="border border-black/10 bg-white p-8 md:p-10">

            <div className="flex items-center gap-3">
              <User size={18} strokeWidth={1.5} />

              <h2 className="text-lg font-medium">
                Sign In
              </h2>
            </div>

            <div className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full border border-black/15 bg-white px-4 py-4 text-sm outline-none transition-colors focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Your password"
                  className="w-full border border-black/15 bg-white px-4 py-4 text-sm outline-none transition-colors focus:border-black"
                />
              </div>

              <button
                type="button"
                className="w-full bg-[#171512] px-6 py-4 text-xs uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-80"
              >
                Sign In
              </button>

              <button
                type="button"
                className="w-full text-xs text-zinc-500 transition-opacity hover:opacity-50"
              >
                Forgot Password?
              </button>

            </div>

          </div>

          {/* Create Account */}
          <div className="border border-black/10 bg-white p-8 md:p-10">

            <h2 className="text-lg font-medium">
              Create an Account
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Create an account to keep track of your orders and make
              future purchases easier.
            </p>

            <button
              type="button"
              className="mt-8 w-full border border-black/20 px-6 py-4 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-[#171512] hover:text-white"
            >
              Create Account
            </button>

          </div>

        </div>

        {/* Orders */}
        <div className="mt-12 border border-black/10 bg-white p-8 md:p-10">

          <h2 className="text-lg font-medium">
            My Orders
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Your orders will appear here after you sign in.
          </p>

        </div>

      </section>

    </main>
  );
}
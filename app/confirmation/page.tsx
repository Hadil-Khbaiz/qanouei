"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { supabase } from "../../lib/supabase";

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  id: string;
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  items: OrderItem[];
  total: number;
  status: string;
  created_at: string;
};

export default function ConfirmationPage() {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOrder = async () => {
      const params = new URLSearchParams(window.location.search);
      const orderId = params.get("order");

      if (!orderId) {
        setError("Order not found.");
        setLoading(false);
        return;
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("Please sign in to view your order.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("orders")
        .select(
          "id, customer_name, phone, email, address, items, total, status, created_at"
        )
        .eq("id", orderId)
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("ORDER ERROR:", error);
        setError("We could not find this order.");
        setLoading(false);
        return;
      }

      setOrder(data);
      setLoading(false);
    };

    loadOrder();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-sm text-zinc-500">
            Loading your order...
          </p>
        </div>
      </main>
    );
  }

  if (error || !order) {
    return (
      <main className="min-h-screen bg-[#F8F5F0] text-[#171512]">

        <header className="border-b border-black/10">
          <div className="mx-auto flex max-w-7xl items-center px-6 py-5">
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
          </div>
        </header>

        <section className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-3xl font-light">
              Order Not Found
            </h1>

            <p className="mt-4 text-sm text-zinc-500">
              {error || "We could not find this order."}
            </p>

            <a
              href="/shop"
              className="mt-8 inline-block bg-[#171512] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white"
            >
              Continue Shopping
            </a>
          </div>
        </section>

      </main>
    );
  }

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

          <a
            href="/shop"
            className="text-xs uppercase tracking-[0.15em] transition-opacity hover:opacity-50"
          >
            Shop
          </a>

        </div>
      </header>

      {/* Invoice */}
      <section className="mx-auto max-w-3xl px-6 py-16">

        {/* Success */}
        <div className="text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white">
            <Check size={28} strokeWidth={1.5} />
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            QANOUEI
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
            Thank You
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-500">
            Your order has been received successfully.
          </p>

        </div>

        {/* Invoice */}
        <div className="mt-12 border border-black/10 bg-white p-8 md:p-10">

          {/* Invoice Header */}
          <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row">

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Invoice
              </p>

              <p className="mt-3 text-sm break-all">
                {order.id}
              </p>
            </div>

            <div className="md:text-right">

              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Date
              </p>

              <p className="mt-3 text-sm">
                {new Date(order.created_at).toLocaleString()}
              </p>

            </div>

          </div>

          {/* Customer Information */}
          <div className="grid gap-8 border-b border-black/10 py-8 md:grid-cols-2">

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Customer
              </p>

              <p className="mt-3 text-sm font-medium">
                {order.customer_name}
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                {order.email}
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                {order.phone}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Delivery Address
              </p>

              <p className="mt-3 whitespace-pre-line text-sm leading-6">
                {order.address}
              </p>
            </div>

          </div>

          {/* Order Status */}
          <div className="border-b border-black/10 py-8">

            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Order Status
            </p>

            <div className="mt-4 flex items-center justify-between">

              <span className="text-sm">
                {order.status === "pending"
                  ? "Order received"
                  : order.status}
              </span>

              <span className="bg-yellow-100 px-3 py-1 text-xs uppercase tracking-[0.12em] text-yellow-800">
                {order.status}
              </span>

            </div>

            <p className="mt-3 text-xs leading-5 text-zinc-500">
              Payment will be available soon.
            </p>

          </div>

          {/* Items */}
          <div className="py-8">

            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Order Items
            </p>

            <div className="mt-6 space-y-5">

              {Array.isArray(order.items) &&
                order.items.map((item) => (

                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-6"
                  >

                    <div>

                      <p className="text-sm font-medium">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-zinc-500">
                        Quantity: {item.quantity}
                      </p>

                    </div>

                    <p className="text-sm whitespace-nowrap">
                      {(item.price * item.quantity).toFixed(3)} KD
                    </p>

                  </div>

                ))}

            </div>

          </div>

          {/* Total */}
          <div className="flex items-center justify-between border-t border-black/10 pt-6">

            <span className="text-sm">
              Total
            </span>

            <span className="text-xl font-medium">
              {Number(order.total).toFixed(3)} KD
            </span>

          </div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <a
            href="/shop"
            className="bg-[#171512] px-8 py-4 text-center text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80"
          >
            Continue Shopping
          </a>

          <a
            href="/account"
            className="border border-black/15 px-8 py-4 text-center text-xs uppercase tracking-[0.2em] transition-colors hover:bg-white"
          >
            My Orders
          </a>

        </div>

      </section>

    </main>
  );
}
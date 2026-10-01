"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";

type Order = {
  id: string;
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  notes: string | null;
  items: any;
  total: number;
  status: string;
  created_at: string;
};

export default function AdminOrdersPage() {
  const router = useRouter();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOrders = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/admin/login");
        return;
      }

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("ORDERS ERROR:", error);
        setError(error.message);
        setLoading(false);
        return;
      }

      setOrders(data || []);
      setLoading(false);
    };

    loadOrders();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f1e8]">
        <p className="text-sm text-[#2d241f]">
          Loading orders...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl text-[#2d241f] sm:text-4xl">
              QANOUEI Orders
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage customer orders.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="shrink-0 border border-[#2d241f] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[#2d241f] transition-colors hover:bg-[#2d241f] hover:text-white"
          >
            Logout
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* No Orders */}
        {orders.length === 0 ? (
          <div className="border border-black/10 bg-white px-6 py-10 text-center">
            <p className="text-sm text-gray-500">
              No orders yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-black/10 bg-white px-5 py-5 sm:px-6"
              >

                {/* Top Row */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-lg font-medium text-[#2d241f]">
                        {order.customer_name}
                      </h2>

                      <span className="text-[10px] uppercase tracking-[0.15em] text-amber-700">
                        {order.status}
                      </span>
                    </div>

                    <p className="mt-1 text-[11px] text-gray-400">
                      Order ID: {order.id}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-lg font-medium text-[#2d241f]">
                      {Number(order.total).toFixed(3)} KD
                    </p>

                    <p className="mt-1 text-[11px] text-gray-400">
                      {new Date(order.created_at).toLocaleString()}
                    </p>
                  </div>

                </div>

                {/* Details */}
                <div className="mt-5 border-t border-black/10 pt-5">

                  <div className="grid gap-5 text-sm sm:grid-cols-2">

                    {/* Customer */}
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                        Customer
                      </p>

                      <p className="text-[#2d241f]">
                        {order.email}
                      </p>

                      <p className="mt-1 text-gray-600">
                        {order.phone}
                      </p>

                      <p className="mt-2 leading-6 text-gray-600">
                        {order.address}
                      </p>

                      {order.notes && (
                        <p className="mt-2 text-gray-500">
                          <span className="text-[#2d241f]">
                            Note:
                          </span>{" "}
                          {order.notes}
                        </p>
                      )}
                    </div>

                    {/* Items */}
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                        Items
                      </p>

                      {Array.isArray(order.items) &&
                        order.items.map((item: any, index: number) => (
                          <div
                            key={item.id || index}
                            className="flex items-center justify-between gap-4 border-b border-black/5 py-2 last:border-0"
                          >
                            <div>
                              <p className="text-[#2d241f]">
                                {item.name}
                              </p>

                              <p className="mt-1 text-xs text-gray-400">
                                Quantity: {item.quantity}
                              </p>
                            </div>

                            <p className="shrink-0 text-sm text-[#2d241f]">
                              {(
                                Number(item.price) *
                                Number(item.quantity)
                              ).toFixed(3)}{" "}
                              KD
                            </p>
                          </div>
                        ))}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}
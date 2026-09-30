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
        <p className="text-[#2d241f]">Loading orders...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-4xl text-[#2d241f]">
              QANOUEI Orders
            </h1>

            <p className="mt-2 text-gray-500">
              Manage customer orders.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="border border-[#2d241f] px-5 py-2 text-sm text-[#2d241f] transition-colors hover:bg-[#2d241f] hover:text-white"
          >
            Logout
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {/* No Orders */}
        {orders.length === 0 ? (
          <div className="bg-white p-10 text-center">
            <p className="text-gray-500">
              No orders yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-6 shadow-sm"
              >

                {/* Order Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-medium text-[#2d241f]">
                      {order.customer_name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Order ID: {order.id}
                    </p>
                  </div>

                  <span className="bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                    {order.status}
                  </span>
                </div>

                {/* Customer + Order */}
                <div className="grid gap-6 text-sm md:grid-cols-2">

                  {/* Customer */}
                  <div>
                    <p className="mb-2 font-medium text-[#2d241f]">
                      Customer
                    </p>

                    <p>{order.email}</p>

                    <p>{order.phone}</p>

                    <p className="mt-2">
                      {order.address}
                    </p>

                    {order.notes && (
                      <p className="mt-3 text-gray-500">
                        <span className="font-medium text-[#2d241f]">
                          Notes:
                        </span>{" "}
                        {order.notes}
                      </p>
                    )}
                  </div>

                  {/* Order */}
                  <div>
                    <p className="mb-2 font-medium text-[#2d241f]">
                      Order
                    </p>

                    <p>
                      Total:{" "}
                      <strong>
                        {Number(order.total).toFixed(3)} KD
                      </strong>
                    </p>

                    <p className="mt-2 text-gray-500">
                      {new Date(order.created_at).toLocaleString()}
                    </p>
                  </div>

                </div>

                {/* Items */}
                <div className="mt-6 border-t pt-6">
                  <p className="mb-3 font-medium text-[#2d241f]">
                    Items
                  </p>

                  <pre className="overflow-auto bg-[#f8f5ef] p-4 text-xs">
                    {JSON.stringify(order.items, null, 2)}
                  </pre>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}
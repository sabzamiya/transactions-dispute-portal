"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Menu,
  Search,
  XCircle,
} from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";

interface Customer {
  id: string;
  customerNumber: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Transaction {
  id: string;
  customerId: string;
  reference: string;
  amount: string;
  currency: string;
  description: string;
  transactionDate: string;
  status: "COMPLETED" | "PENDING" | "FAILED" | "REVERSED";
  createdAt: string;
  customer: Customer;
}

interface TransactionsResponse {
  data: Transaction[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

const API_URL = "http://localhost:3001/api";

function formatCurrency(amount: string, currency: string) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency,
  }).format(Number(amount));
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function StatusBadge({
  status,
}: {
  status: Transaction["status"];
}) {
  const styles = {
    COMPLETED:
      "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    PENDING:
      "bg-amber-50 text-amber-700 ring-amber-600/20",
    FAILED:
      "bg-red-50 text-red-700 ring-red-600/20",
    REVERSED:
      "bg-slate-100 text-slate-700 ring-slate-600/20",
  };

  const icons = {
    COMPLETED: <CheckCircle2 size={14} />,
    PENDING: <Clock3 size={14} />,
    FAILED: <XCircle size={14} />,
    REVERSED: <XCircle size={14} />,
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${styles[status]}`}
    >
      {icons[status]}
      {status}
    </span>
  );
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  async function loadTransactions() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/transactions`);

      if (!response.ok) {
        throw new Error("Failed to load transactions");
      }

      const result: TransactionsResponse = await response.json();

      setTransactions(result.data);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to load transactions. Please make sure the backend is running on port 3001.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  const filteredTransactions = transactions.filter((transaction) => {
    const value = search.toLowerCase();

    return (
      transaction.reference.toLowerCase().includes(value) ||
      transaction.description.toLowerCase().includes(value) ||
      `${transaction.customer.firstName} ${transaction.customer.lastName}`
        .toLowerCase()
        .includes(value)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
              >
                <Menu size={22} />
              </button>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#d71920]">
                  Banking Portal
                </p>

                <h1 className="text-xl font-bold text-slate-900">
                  Transactions
                </h1>
              </div>
            </div>

            <p className="hidden text-sm text-slate-400 sm:block">
              View and manage transactions
            </p>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Transactions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Review recent customer transactions.
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Transaction List
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  {filteredTransactions.length} transaction
                  {filteredTransactions.length === 1 ? "" : "s"}
                </p>
              </div>

              <div className="relative w-full sm:w-80">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search transactions..."
                  className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#d71920] focus:ring-2 focus:ring-red-100"
                />
              </div>
            </div>

            {loading ? (
              <div className="flex h-64 items-center justify-center text-sm text-slate-400">
                Loading transactions...
              </div>
            ) : filteredTransactions.length === 0 ? (
              <div className="flex h-64 items-center justify-center text-sm text-slate-400">
                No transactions found.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Reference
                      </th>

                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Customer
                      </th>

                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Amount
                      </th>

                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Status
                      </th>

                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Date
                      </th>

                      <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {filteredTransactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="transition-colors hover:bg-slate-50"
                      >
                        <td className="px-5 py-4">
                          <p className="font-medium text-slate-900">
                            {transaction.reference}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            {transaction.description}
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <p className="font-medium text-slate-800">
                            {transaction.customer.firstName}{" "}
                            {transaction.customer.lastName}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            {transaction.customer.customerNumber}
                          </p>
                        </td>

                        <td className="px-5 py-4 font-semibold text-slate-900">
                          {formatCurrency(
                            transaction.amount,
                            transaction.currency,
                          )}
                        </td>

                        <td className="px-5 py-4">
                          <StatusBadge status={transaction.status} />
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-500">
                          {formatDate(transaction.transactionDate)}
                        </td>

                        <td className="px-5 py-4 text-right">
                          <Link
                            href={`/transactions/${transaction.id}`}
                            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-[#d71920] transition hover:bg-red-50"
                          >
                            View
                            <ArrowUpRight size={15} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
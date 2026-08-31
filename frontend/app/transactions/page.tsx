"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  BarChart3,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

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

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

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

  const completed = transactions.filter(
    (transaction) => transaction.status === "COMPLETED",
  ).length;

  const pending = transactions.filter(
    (transaction) => transaction.status === "PENDING",
  ).length;

  const failed = transactions.filter(
    (transaction) => transaction.status === "FAILED",
  ).length;

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

  function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-ZA", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  }

  function formatAmount(amount: string, currency: string) {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency,
    }).format(Number(amount));
  }

  function statusClass(status: Transaction["status"]) {
    switch (status) {
      case "COMPLETED":
        return "bg-green-100 text-green-700";

      case "PENDING":
        return "bg-yellow-100 text-yellow-700";

      case "FAILED":
        return "bg-red-100 text-red-700";

      case "REVERSED":
        return "bg-gray-100 text-gray-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex h-20 items-center px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#d71920]">
              Transactions & Disputes Portal
            </p>

            <h1 className="text-xl font-bold text-slate-900">
              Transactions
            </h1>
          </div>
        </div>
      </header>

      <main className="p-4 sm:p-6 lg:p-8">
        {/* Page introduction */}
        <div className="mb-7">
          <Link
            href="/"
            className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#2403c7]"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </Link>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Transactions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            View and manage customer transactions.
          </p>
        </div>

        {/* Transaction Summary Cards */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {/* Total Transactions */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Transactions
                </p>

                <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                  {loading ? "—" : transactions.length}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  All transactions
                </p>
              </div>

              <div className="rounded-lg bg-red-50 p-3 text-[#d71920]">
                <BarChart3 size={21} />
              </div>
            </div>
          </div>

          {/* Completed */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Completed
                </p>

                <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                  {loading ? "—" : completed}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  Successfully processed
                </p>
              </div>

              <div className="rounded-lg bg-emerald-50 p-3 text-emerald-600">
                <CheckCircle2 size={21} />
              </div>
            </div>
          </div>

          {/* Pending */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Pending
                </p>

                <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                  {loading ? "—" : pending}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  Awaiting processing
                </p>
              </div>

              <div className="rounded-lg bg-amber-50 p-3 text-amber-600">
                <Clock3 size={21} />
              </div>
            </div>
          </div>

          {/* Failed */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Failed
                </p>

                <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                  {loading ? "—" : failed}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  Transactions unsuccessful
                </p>
              </div>

              <div className="rounded-lg bg-red-50 p-3 text-[#d71920]">
                <XCircle size={21} />
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="relative max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search transactions..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#2403c7] focus:ring-2 focus:ring-[#2403c7]/10"
            />
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="text-sm text-slate-500">
              Loading transactions...
            </p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <p className="font-medium text-red-700">{error}</p>

            <button
              type="button"
              onClick={loadTransactions}
              className="mt-4 rounded-lg bg-[#2403c7] px-4 py-2 text-sm font-medium text-white hover:bg-[#1d02a8]"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Transactions Table */}
        {!loading && !error && (
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Reference
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Customer
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Description
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Amount
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Date
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredTransactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <Link
                          href={`/transactions/${transaction.id}`}
                          className="font-semibold text-[#2403c7] hover:underline"
                        >
                          {transaction.reference}
                        </Link>
                      </td>

                      <td className="px-5 py-4">
                        <div>
                          <p className="font-medium text-slate-900">
                            {transaction.customer.firstName}{" "}
                            {transaction.customer.lastName}
                          </p>

                          <p className="text-xs text-slate-500">
                            {transaction.customer.customerNumber}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600">
                        {transaction.description}
                      </td>

                      <td className="px-5 py-4 font-semibold text-slate-900">
                        {formatAmount(
                          transaction.amount,
                          transaction.currency,
                        )}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600">
                        {formatDate(transaction.transactionDate)}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClass(
                            transaction.status,
                          )}`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredTransactions.length === 0 && (
              <div className="p-10 text-center">
                <p className="text-sm text-slate-500">
                  No transactions found.
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
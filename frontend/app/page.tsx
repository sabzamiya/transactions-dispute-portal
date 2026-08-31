"use client";

import { useEffect, useMemo, useState } from "react";
import {
BarChart3,
CheckCircle2,
Clock3,
TrendingUp,
WalletCards,
XCircle,
RotateCcw,
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

function SummaryCard({
title,
value,
description,
icon,
accent,
iconBackground,
}: {
title: string;
value: string;
description: string;
icon: React.ReactNode;
accent: string;
iconBackground: string;
}) {
return (
<div
className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${accent}`}
>
{/* Accent line */} <div className="absolute left-0 top-0 h-1 w-full bg-current opacity-80" />

  {/* Decorative background */}
  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-current opacity-[0.04] transition-transform duration-300 group-hover:scale-150" />

  <div className="relative flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500">{title}</p>

      <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-2 text-xs text-slate-400">{description}</p>
    </div>

    <div className={`rounded-xl p-3 ${iconBackground}`}>{icon}</div>
  </div>
</div>

);
}

function formatCurrency(value: number) {
return new Intl.NumberFormat("en-ZA", {
style: "currency",
currency: "ZAR",
maximumFractionDigits: 2,
}).format(value);
}

export default function Home() {
const [transactions, setTransactions] = useState<Transaction[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

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
    "Unable to connect to the Transactions API. Make sure the backend is running on port 3001.",
  );
} finally {
  setLoading(false);
}

}

useEffect(() => {
loadTransactions();
}, []);

const statistics = useMemo(() => {
const completed = transactions.filter(
(transaction) => transaction.status === "COMPLETED",
).length;

const pending = transactions.filter(
  (transaction) => transaction.status === "PENDING",
).length;

const failed = transactions.filter(
  (transaction) => transaction.status === "FAILED",
).length;

const reversed = transactions.filter(
  (transaction) => transaction.status === "REVERSED",
).length;

const revenue = transactions.reduce(
  (total, transaction) => total + Number(transaction.amount),
  0,
);

return {
  total: transactions.length,
  completed,
  pending,
  failed,
  reversed,
  revenue,
};

}, [transactions]);

const statusData = [
{
label: "Completed",
value: statistics.completed,
percentage:
statistics.total > 0
? (statistics.completed / statistics.total) * 100
: 0,
bar: "bg-emerald-500",
text: "text-emerald-600",
background: "bg-emerald-50",
},
{
label: "Pending",
value: statistics.pending,
percentage:
statistics.total > 0
? (statistics.pending / statistics.total) * 100
: 0,
bar: "bg-amber-500",
text: "text-amber-600",
background: "bg-amber-50",
},
{
label: "Failed",
value: statistics.failed,
percentage:
statistics.total > 0
? (statistics.failed / statistics.total) * 100
: 0,
bar: "bg-red-500",
text: "text-red-600",
background: "bg-red-50",
},
{
label: "Reversed",
value: statistics.reversed,
percentage:
statistics.total > 0
? (statistics.reversed / statistics.total) * 100
: 0,
bar: "bg-slate-500",
text: "text-slate-600",
background: "bg-slate-100",
},
];

const recentTransactions = [...transactions]
.sort(
(a, b) =>
new Date(b.transactionDate).getTime() -
new Date(a.transactionDate).getTime(),
)
.slice(0, 7);

const maxTransactionAmount = Math.max(
...recentTransactions.map((transaction) => Number(transaction.amount)),
1,
);

return ( <div className="min-h-screen bg-slate-50">
{/* Header */} <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur"> <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8"> <div> <p className="text-xs font-bold uppercase tracking-wider text-[#d71920]">
Transactions & Disputes Portal </p>

        <h1 className="mt-1 text-xl font-bold text-slate-900">
          Dashboard
        </h1>
      </div>

      <div className="hidden items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 sm:flex">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="text-xs font-medium text-slate-600">
          System Operational
        </span>
      </div>
    </div>
  </header>

  <main className="p-4 sm:p-6 lg:p-8">
    {/* Introduction */}
    <div className="mb-7">
      <div className="flex items-center gap-3">
        <div className="h-9 w-1 rounded-full bg-[#d71920]" />

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Monitor transaction activity and financial performance.
          </p>
        </div>
      </div>
    </div>

    {/* Error */}
    {error && (
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
        <XCircle size={18} />
        {error}
      </div>
    )}

    {/* Summary Cards */}
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <SummaryCard
        title="Total Transactions"
        value={loading ? "—" : statistics.total.toString()}
        description="All transactions"
        icon={<BarChart3 size={21} />}
        accent="text-[#d71920]"
        iconBackground="bg-red-50 text-[#d71920]"
      />

      <SummaryCard
        title="Completed"
        value={loading ? "—" : statistics.completed.toString()}
        description="Successfully processed"
        icon={<CheckCircle2 size={21} />}
        accent="text-emerald-600"
        iconBackground="bg-emerald-50 text-emerald-600"
      />

      <SummaryCard
        title="Pending"
        value={loading ? "—" : statistics.pending.toString()}
        description="Awaiting processing"
        icon={<Clock3 size={21} />}
        accent="text-amber-600"
        iconBackground="bg-amber-50 text-amber-600"
      />

      <SummaryCard
        title="Total Revenue"
        value={loading ? "—" : formatCurrency(statistics.revenue)}
        description="Transaction value"
        icon={<WalletCards size={21} />}
        accent="text-slate-700"
        iconBackground="bg-slate-100 text-slate-700"
      />
    </div>

    {/* Charts */}
    <div className="mt-6 grid gap-6 xl:grid-cols-2">
      {/* Transaction Activity */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 bg-gradient-to-r from-red-50/70 to-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Transaction Activity
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Recent transaction values
              </p>
            </div>

            <div className="rounded-xl bg-red-100 p-2.5 text-[#d71920]">
              <BarChart3 size={19} />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center text-sm text-slate-400">
            Loading chart...
          </div>
        ) : recentTransactions.length === 0 ? (
          <div className="flex h-64 items-center justify-center text-sm text-slate-400">
            No transaction data available.
          </div>
        ) : (
          <div className="p-5">
            <div className="flex h-64 items-end gap-3 overflow-x-auto border-b border-slate-100 pb-2">
              {recentTransactions.map((transaction) => {
                const amount = Number(transaction.amount);

                const height = Math.max(
                  8,
                  (amount / maxTransactionAmount) * 100,
                );

                const isCompleted =
                  transaction.status === "COMPLETED";
                const isPending = transaction.status === "PENDING";
                const isFailed = transaction.status === "FAILED";

                const barColor = isCompleted
                  ? "bg-emerald-500 hover:bg-emerald-600"
                  : isPending
                    ? "bg-amber-500 hover:bg-amber-600"
                    : isFailed
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-slate-500 hover:bg-slate-600";

                return (
                  <div
                    key={transaction.id}
                    className="flex min-w-[55px] flex-1 flex-col items-center justify-end gap-2"
                  >
                    <span className="text-[10px] font-semibold text-slate-500">
                      {formatCurrency(amount).replace("ZAR", "R")}
                    </span>

                    <div
                      className={`w-full max-w-[42px] rounded-t-lg shadow-sm transition-all duration-300 ${barColor}`}
                      style={{ height: `${height}%` }}
                      title={`${transaction.reference}: ${formatCurrency(amount)}`}
                    />

                    <span className="max-w-[60px] truncate text-[10px] text-slate-400">
                      {transaction.reference}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Completed
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                Pending
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                Failed
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Transaction Status */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Transaction Status
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Current transaction distribution
              </p>
            </div>

            <div className="rounded-xl bg-slate-100 p-2.5 text-slate-700">
              <TrendingUp size={19} />
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="space-y-5">
            {statusData.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg ${item.background} ${item.text}`}
                    >
                      {item.label === "Completed" && (
                        <CheckCircle2 size={15} />
                      )}

                      {item.label === "Pending" && <Clock3 size={15} />}

                      {item.label === "Failed" && <XCircle size={15} />}

                      {item.label === "Reversed" && (
                        <RotateCcw size={15} />
                      )}
                    </span>

                    <span className="text-sm font-medium text-slate-600">
                      {item.label}
                    </span>
                  </div>

                  <span className="text-sm font-bold text-slate-900">
                    {item.value}
                  </span>
                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${item.bar}`}
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />
                </div>

                <p
                  className={`mt-1 text-right text-xs font-medium ${item.text}`}
                >
                  {item.percentage.toFixed(1)}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

    {/* Revenue Chart */}
    <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-gradient-to-r from-red-50/70 via-white to-white p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-slate-900">
              Revenue Overview
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Transaction revenue across recent activity
            </p>
          </div>

          <div className="rounded-xl bg-red-100 p-2.5 text-[#d71920]">
            <TrendingUp size={20} />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex h-56 items-center justify-center text-sm text-slate-400">
          Loading revenue...
        </div>
      ) : recentTransactions.length === 0 ? (
        <div className="flex h-56 items-center justify-center text-sm text-slate-400">
          No revenue data available.
        </div>
      ) : (
        <div className="p-5">
          <div className="h-56">
            <div className="flex h-full items-end gap-2">
              {recentTransactions.map((transaction) => {
                const amount = Number(transaction.amount);

                const height = Math.max(
                  5,
                  (amount / maxTransactionAmount) * 100,
                );

                return (
                  <div
                    key={transaction.id}
                    className="group flex h-full flex-1 flex-col justify-end"
                  >
                    <div className="relative flex flex-1 items-end">
                      <div
                        className="w-full rounded-t-lg bg-[#d71920]/75 shadow-sm transition-all duration-300 group-hover:bg-[#d71920]"
                        style={{
                          height: `${height}%`,
                        }}
                        title={`${transaction.reference}: ${formatCurrency(amount)}`}
                      />
                    </div>

                    <div className="mt-2 truncate text-center text-[10px] font-medium text-slate-400">
                      {transaction.reference}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>

    {/* Footer */}
    <div className="mt-8 border-t border-slate-200 pt-5 text-center text-xs text-slate-400">
      Secure Transaction Management Portal
    </div>
  </main>
</div>

);
}

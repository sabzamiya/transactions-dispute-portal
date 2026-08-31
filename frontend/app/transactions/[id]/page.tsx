"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  AlertCircle,
  CalendarDays,
  CreditCard,
  User,
  ShieldAlert,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Customer {
  id: string;
  customerNumber: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Dispute {
  id: string;
  reason: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  resolvedAt: string | null;
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
  disputes: Dispute[];
}

export default function TransactionDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const id = typeof params.id === "string" ? params.id : "";

  useEffect(() => {
    async function loadTransaction() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/transactions/${id}`,
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Transaction not found");
          }

          throw new Error("Failed to load transaction");
        }

        const result: { data: Transaction } = await response.json();

        setTransaction(result.data);
      } catch (err) {
        console.error(err);

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load transaction",
        );
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadTransaction();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
            <p className="mt-3 text-sm text-slate-500">
              Loading transaction...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !transaction) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-5xl p-5 sm:p-8">
          <button
            onClick={() => router.back()}
            className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.98]  text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Back to transactions
          </button>

          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-500" size={20} />

              <div>
                <p className="font-medium text-red-800">
                  Unable to load transaction
                </p>

                <p className="mt-1 text-sm text-red-700">
                  {error || "Transaction not found"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-5xl p-5 sm:p-8">

        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="mb-5 inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98]"
          >
            <ArrowLeft size={17} />
            Back to transactions
          </button>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Transaction
              </p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                {transaction.reference}
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Transaction details and associated disputes
              </p>
            </div>

            <StatusBadge status={transaction.status} />
          </div>
        </div>

        {/* Transaction overview */}
        <section className="mb-6 rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">
              Transaction Overview
            </h2>
          </div>

          <div className="grid gap-6 p-5 sm:grid-cols-2 lg:grid-cols-3">

            <DetailItem
              label="Reference"
              value={transaction.reference}
              icon={<CreditCard size={18} />}
            />

            <DetailItem
              label="Amount"
              value={`${transaction.currency} ${Number(
                transaction.amount,
              ).toLocaleString("en-ZA", {
                minimumFractionDigits: 2,
              })}`}
              icon={<CreditCard size={18} />}
            />

            <DetailItem
              label="Transaction Date"
              value={formatDateTime(transaction.transactionDate)}
              icon={<CalendarDays size={18} />}
            />

            <DetailItem
              label="Description"
              value={transaction.description}
              icon={<CreditCard size={18} />}
            />

            <DetailItem
              label="Transaction ID"
              value={transaction.id}
              icon={<CreditCard size={18} />}
            />
          </div>
        </section>

        {/* Customer */}
        <section className="mb-6 rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">
              Customer Information
            </h2>
          </div>

          <div className="grid gap-6 p-5 sm:grid-cols-2 lg:grid-cols-3">
            <DetailItem
              label="Customer"
              value={`${transaction.customer.firstName} ${transaction.customer.lastName}`}
              icon={<User size={18} />}
            />

            <DetailItem
              label="Customer Number"
              value={transaction.customer.customerNumber}
              icon={<User size={18} />}
            />

            <DetailItem
              label="Email"
              value={transaction.customer.email}
              icon={<User size={18} />}
            />
          </div>
        </section>

        {/* Disputes */}
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 p-5">
            <div>
              <h2 className="font-semibold text-slate-900">
                Associated Disputes
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {transaction.disputes.length} dispute
                {transaction.disputes.length !== 1 ? "s" : ""}
              </p>
            </div>

            <ShieldAlert size={20} className="text-slate-500" />
          </div>

          {transaction.disputes.length === 0 ? (
            <div className="p-8 text-center">
              <ShieldAlert
                size={28}
                className="mx-auto text-slate-300"
              />

              <p className="mt-3 font-medium text-slate-700">
                No disputes
              </p>

              <p className="mt-1 text-sm text-slate-500">
                There are no disputes associated with this transaction.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {transaction.disputes.map((dispute) => (
                <div
                  key={dispute.id}
                  className="p-5"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <p className="font-medium text-slate-900">
                        {dispute.reason}
                      </p>

                      <p className="mt-1 text-sm text-slate-600">
                        {dispute.description}
                      </p>
                    </div>

                    <StatusBadge status={dispute.status} />
                  </div>

                  <p className="mt-3 text-xs text-slate-500">
                    Submitted {formatDateTime(dispute.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function DetailItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-slate-400">
        {icon}
        <p className="text-xs font-semibold uppercase tracking-wider">
          {label}
        </p>
      </div>

      <p className="mt-2 break-words text-sm font-medium text-slate-900">
        {value}
      </p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    COMPLETED: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    PENDING: "bg-amber-50 text-amber-700 ring-amber-600/20",
    FAILED: "bg-red-50 text-red-700 ring-red-600/20",
    REVERSED: "bg-slate-100 text-slate-700 ring-slate-600/20",
    SUBMITTED: "bg-blue-400 text-white-700 ring-blue-600/20",
    UNDER_REVIEW: "bg-amber-50 text-amber-700 ring-amber-600/20",
    ADDITIONAL_INFORMATION_REQUIRED:
      "bg-purple-50 text-purple-700 ring-purple-600/20",
    RESOLVED: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    REJECTED: "bg-red-50 text-red-700 ring-red-600/20",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${
        styles[status] ??
        "bg-slate-100 text-slate-700 ring-slate-600/20"
      }`}
    >
      {status.replaceAll("_", " ")}
    </span>
  );
}

function formatDateTime(date: string) {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}
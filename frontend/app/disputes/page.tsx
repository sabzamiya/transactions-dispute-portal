"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Clock,
  ShieldAlert,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Customer {
  id: string;
  customerNumber: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Transaction {
  id: string;
  reference: string;
  amount: string;
  currency: string;
  description: string;
  transactionDate: string;
  status: string;
}

interface Dispute {
  id: string;
  transactionId: string;
  customerId: string;
  reason: string;
  description: string;
  status: "SUBMITTED" | "UNDER_REVIEW" | "RESOLVED" | "REJECTED";
  createdAt: string;
  updatedAt: string;
  resolvedAt: string | null;
  customer: Customer;
  transaction: Transaction;
}

interface DisputesResponse {
  data: Dispute[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function DisputesPage() {
  const router = useRouter();

  const [disputes, setDisputes] = useState<Dispute[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadDisputes() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/disputes`);

      if (!response.ok) {
        throw new Error("Failed to load disputes");
      }

      const result: DisputesResponse = await response.json();

      setDisputes(result.data);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to load disputes. Make sure the backend is running on port 3001.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDisputes();
  }, []);

  const submitted = disputes.filter(
    (dispute) => dispute.status === "SUBMITTED",
  ).length;

  const underReview = disputes.filter(
    (dispute) => dispute.status === "UNDER_REVIEW",
  ).length;

  const resolved = disputes.filter(
    (dispute) => dispute.status === "RESOLVED",
  ).length;

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
                Disputes
            </h1>
            </div>
        </div>
    </header>

      <main className="p-4 sm:p-6 lg:p-8">
        {/* Back */}
        <Link
            href="/transactions"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#2403c7]"
            >
            <ArrowLeft size={17} />
            Back to Transactions
        </Link>

        {/* Heading */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
              <ShieldAlert size={22} />
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Disputes
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Review and manage customer transaction disputes.
              </p>
            </div>
          </div>
        </div>

        {/* Dispute Summary Cards */}
<div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
  {/* Total Disputes */}
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Total Disputes
        </p>

        <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
          {loading ? "—" : disputes.length}
        </p>

        <p className="mt-2 text-xs text-slate-400">
          All customer disputes
        </p>
      </div>

      <div className="rounded-lg bg-red-50 p-3 text-[#d71920]">
        <ShieldAlert size={21} />
      </div>
    </div>
  </div>

  {/* Submitted */}
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Submitted
        </p>

        <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
          {loading ? "—" : submitted}
        </p>

        <p className="mt-2 text-xs text-slate-400">
          Awaiting review
        </p>
      </div>

      <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
        <AlertCircle size={21} />
      </div>
    </div>
  </div>

  {/* Under Review */}
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Under Review
        </p>

        <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
          {loading ? "—" : underReview}
        </p>

        <p className="mt-2 text-xs text-slate-400">
          Currently being reviewed
        </p>
      </div>

      <div className="rounded-lg bg-amber-50 p-3 text-amber-600">
        <Clock size={21} />
      </div>
    </div>
  </div>

  {/* Resolved */}
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">
          Resolved
        </p>

        <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
          {loading ? "—" : resolved}
        </p>

        <p className="mt-2 text-xs text-slate-400">
          Successfully resolved
        </p>
      </div>

      <div className="rounded-lg bg-emerald-50 p-3 text-emerald-600">
        <CheckCircle2 size={21} />
      </div>
    </div>
  </div>
</div>

        {/* Disputes table */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">
              All Disputes
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Live data from the Disputes API
            </p>
          </div>

          {loading && (
            <div className="p-10 text-center">
              <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />

              <p className="mt-3 text-sm text-slate-500">
                Loading disputes...
              </p>
            </div>
          )}

          {!loading && error && (
            <div className="p-6">
              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <div className="flex gap-3">
                  <AlertCircle
                    size={20}
                    className="shrink-0 text-red-600"
                  />

                  <div>
                    <p className="font-medium text-red-800">
                      Unable to load disputes
                    </p>

                    <p className="mt-1 text-sm text-red-700">
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!loading && !error && disputes.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <TableHeader>Transaction</TableHeader>
                    <TableHeader>Customer</TableHeader>
                    <TableHeader>Reason</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Status</TableHeader>
                    <TableHeader>Created</TableHeader>
                  </tr>
                </thead>

                <tbody>
                  {disputes.map((dispute) => (
                    <tr
                      key={dispute.id}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <p className="font-medium text-slate-900">
                          {dispute.transaction.reference}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                          {dispute.transaction.currency}{" "}
                          {Number(
                            dispute.transaction.amount,
                          ).toLocaleString("en-ZA", {
                            minimumFractionDigits: 2,
                          })}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <p className="font-medium text-slate-800">
                          {dispute.customer.firstName}{" "}
                          {dispute.customer.lastName}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                          {dispute.customer.customerNumber}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <p className="text-sm font-medium text-slate-800">
                          {dispute.reason}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <p className="max-w-xs truncate text-sm text-slate-600">
                          {dispute.description}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <DisputeStatusBadge status={dispute.status} />
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600">
                        {formatDate(dispute.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {!loading && !error && disputes.length === 0 && (
            <div className="p-10 text-center">
              <ShieldAlert
                size={32}
                className="mx-auto text-slate-300"
              />

              <p className="mt-3 font-medium text-slate-700">
                No disputes found
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Created disputes will appear here.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function SummaryCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
        {value}
      </p>
    </div>
  );
}

function TableHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
      {children}
    </th>
  );
}

function DisputeStatusBadge({
  status,
}: {
  status: Dispute["status"];
}) {
  const styles = {
    SUBMITTED:
      "bg-blue-50 text-blue-700 ring-blue-600/20",
    UNDER_REVIEW:
      "bg-amber-50 text-amber-700 ring-amber-600/20",
    RESOLVED:
      "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    REJECTED:
      "bg-red-50 text-red-700 ring-red-600/20",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${styles[status]}`}
    >
      {status.replace("_", " ")}
    </span>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}
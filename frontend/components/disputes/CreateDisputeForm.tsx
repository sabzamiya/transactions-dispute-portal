"use client";

import { FormEvent, useState } from "react";

interface Transaction {
  id: string;
  customerId: string;
  reference: string;
  amount: string;
  currency: string;
  description: string;
}

interface CreateDisputeFormProps {
  transaction: Transaction;
  onSuccess: () => void;
  onCancel: () => void;
}

const API_URL = "http://localhost:3001/api";

const disputeReasons = [
  "Transaction not recognised",
  "Incorrect transaction amount",
  "Duplicate transaction",
  "Transaction charged incorrectly",
  "Other",
];

export default function CreateDisputeForm({
  transaction,
  onSuccess,
  onCancel,
}: CreateDisputeFormProps) {
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!reason) {
      setError("Please select a dispute reason.");
      return;
    }

    if (!description.trim()) {
      setError("Please provide a description.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const response = await fetch(`${API_URL}/disputes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transactionId: transaction.id,
          customerId: transaction.customerId,
          reason,
          description: description.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message || "Failed to create dispute.",
        );
      }

      onSuccess();
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to create dispute.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Transaction */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Transaction
        </p>

        <p className="mt-2 font-semibold text-slate-900">
          {transaction.reference}
        </p>

        <p className="mt-1 text-sm text-slate-600">
          {transaction.currency}{" "}
          {Number(transaction.amount).toLocaleString("en-ZA", {
            minimumFractionDigits: 2,
          })}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {transaction.description}
        </p>
      </div>

      {/* Reason */}
      <div>
        <label
          htmlFor="reason"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Dispute Reason
        </label>

        <select
          id="reason"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          disabled={submitting}
          className="w-full cursor-pointer rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-100"
        >
          <option value="">Select a reason</option>

          {disputeReasons.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Description
        </label>

        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          disabled={submitting}
          rows={5}
          placeholder="Please provide details about the dispute..."
          className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-100"
        />

        <p className="mt-1 text-xs text-slate-400">
          Provide enough information to help investigate the dispute.
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3">
          <p className="text-sm font-medium text-red-700">
            {error}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          disabled={submitting}
          className="cursor-pointer rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={submitting}
          className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit Dispute"}
        </button>
      </div>
    </form>
  );
}
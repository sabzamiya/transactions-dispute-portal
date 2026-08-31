"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface TransactionOverviewChartProps {
  totalTransactions: number;
  completedTransactions: number;
  pendingTransactions: number;
  failedTransactions: number;
  reversedTransactions: number;
}

export default function TransactionOverviewChart({
  totalTransactions,
  completedTransactions,
  pendingTransactions,
  failedTransactions,
  reversedTransactions,
}: TransactionOverviewChartProps) {
  const data = [
    {
      name: "Total",
      transactions: totalTransactions,
    },
    {
      name: "Completed",
      transactions: completedTransactions,
    },
    {
      name: "Pending",
      transactions: pendingTransactions,
    },
    {
      name: "Failed",
      transactions: failedTransactions,
    },
    {
      name: "Reversed",
      transactions: reversedTransactions,
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Transaction Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Transaction volume by status
        </p>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="transactions"
              name="Transactions"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
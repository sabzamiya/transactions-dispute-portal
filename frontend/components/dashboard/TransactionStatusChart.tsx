"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface TransactionStatusChartProps {
  completed: number;
  pending: number;
  failed: number;
  reversed: number;
}

export default function TransactionStatusChart({
  completed,
  pending,
  failed,
  reversed,
}: TransactionStatusChartProps) {
  const data = [
    {
      name: "Completed",
      value: completed,
    },
    {
      name: "Pending",
      value: pending,
    },
    {
      name: "Failed",
      value: failed,
    },
    {
      name: "Reversed",
      value: reversed,
    },
  ].filter((item) => item.value > 0);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Transaction Status
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Distribution of transaction statuses
        </p>
      </div>

      <div className="h-[350px] w-full">
        {data.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-slate-500">
            No transaction data available
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                innerRadius={60}
                paddingAngle={3}
                label
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
          <span className="text-slate-500">Completed</span>
          <span className="font-semibold text-slate-900">
            {completed}
          </span>
        </div>

        <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
          <span className="text-slate-500">Pending</span>
          <span className="font-semibold text-slate-900">
            {pending}
          </span>
        </div>

        <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
          <span className="text-slate-500">Failed</span>
          <span className="font-semibold text-slate-900">
            {failed}
          </span>
        </div>

        <div className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
          <span className="text-slate-500">Reversed</span>
          <span className="font-semibold text-slate-900">
            {reversed}
          </span>
        </div>
      </div>
    </div>
  );
}
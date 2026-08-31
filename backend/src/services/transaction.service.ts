import { TransactionStatus } from "../generated/prisma/index.js";
import {
  findTransactionById,
  findTransactions,
} from "../repositories/transaction.repository.js";

export interface GetTransactionsParams {
  customerId?: string;
  status?: string;
  page?: number;
  limit?: number;
}

export async function getTransactions(
  params: GetTransactionsParams = {},
) {
  const page = Math.max(1, params.page ?? 1);
  const limit = Math.min(100, Math.max(1, params.limit ?? 10));

  let status: TransactionStatus | undefined;

  if (params.status) {
    const validStatuses = Object.values(TransactionStatus);

    if (!validStatuses.includes(params.status as TransactionStatus)) {
      throw new Error(`Invalid transaction status: ${params.status}`);
    }

    status = params.status as TransactionStatus;
  }

  const filters: {
    customerId?: string;
    status?: TransactionStatus;
    page: number;
    limit: number;
  } = {
    page,
    limit,
  };

  if (params.customerId) {
    filters.customerId = params.customerId;
  }

  if (status) {
    filters.status = status;
  }

  const result = await findTransactions(filters);

  return {
    data: result.transactions,
    pagination: {
      page,
      limit,
      total: result.total,
      totalPages: Math.ceil(result.total / limit),
    },
  };
}

export async function getTransactionById(id: string) {
  return findTransactionById(id);
}
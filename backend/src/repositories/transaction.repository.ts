import { Prisma, TransactionStatus } from "../generated/prisma/index.js";
import { prisma } from "../config/database.js";

export interface TransactionFilters {
    customerId?: string;
    status?: TransactionStatus;
    page: number;
    limit: number;
}

export async function findTransactions(filters: TransactionFilters) {
    const { customerId, status, page, limit } = filters;

    const where: Prisma.TransactionWhereInput = {};

    if (customerId) {
        where.customerId = customerId;
    }

    if (status) {
        where.status = status;
    }

    const skip = (page - 1) * limit;

    const [transactions, total] = await Promise.all([
        prisma.transaction.findMany({
            where,
            include: {
                customer: true,
            },
            orderBy: {
                transactionDate: "desc",
            },
            skip,
            take: limit,
        }),

        prisma.transaction.count({
            where,
        }),
    ]);

    return {
        transactions,
        total,
    };
}

export async function findTransactionById(id: string) {
    return prisma.transaction.findUnique({
        where: {
            id,
        },
        include: {
            customer: true,
            disputes: true,
        },
    });
}
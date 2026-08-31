import { Prisma, DisputeStatus } from "../generated/prisma/index.js";
import { prisma } from "../config/database.js";

export interface DisputeFilters {
    status?: DisputeStatus;
    customerId?: string;
    page: number;
    limit: number;
}

export async function findDisputes(filters: DisputeFilters) {
    const { status, customerId, page, limit } = filters;

    const where: Prisma.DisputeWhereInput = {};

    if (status) {
        where.status = status;
    }

    if (customerId) {
        where.customerId = customerId;
    }

    const skip = (page - 1) * limit;

    const [disputes, total] = await Promise.all([
        prisma.dispute.findMany({
            where,
            include: {
                customer: true,
                transaction: true,
            },
            orderBy: {
                createdAt: "desc",
            },
            skip,
            take: limit,
        }),

        prisma.dispute.count({
            where,
        }),
    ]);

    return {
        disputes,
        total,
    };
}

export async function findDisputeById(id: string) {
    return prisma.dispute.findUnique({
        where: {
            id,
        },
        include: {
            customer: true,
            transaction: true,
            history: {
                orderBy: {
                    createdAt: "asc",
                },
            },
        },
    });
}

export async function createDispute(data: {
    transactionId: string;
    customerId: string;
    reason: string;
    description: string;
}) {
    return prisma.dispute.create({
        data: {
            transactionId: data.transactionId,
            customerId: data.customerId,
            reason: data.reason,
            description: data.description,
            status: "SUBMITTED",

            history: {
                create: {
                    status: "SUBMITTED",
                    comment: "Dispute submitted",
                },
            },
        },

        include: {
            customer: true,
            transaction: true,
            history: {
                orderBy: {
                    createdAt: "asc",
                },
            },
        },
    });
}
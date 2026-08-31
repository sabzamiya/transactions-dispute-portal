import { DisputeStatus } from "../generated/prisma/index.js";

import {
    createDispute,
    findDisputeById,
    findDisputes,
} from "../repositories/dispute.repository.js";

import { prisma } from "../config/database.js";

export interface GetDisputesParams {
    customerId?: string;
    status?: string;
    page?: number;
    limit?: number;
}

export interface CreateDisputeParams {
    transactionId: string;
    customerId: string;
    reason: string;
    description: string;
}

export async function getDisputes(
    params: GetDisputesParams = {},
) {
    const page = Math.max(1, params.page ?? 1);
    const limit = Math.min(100, Math.max(1, params.limit ?? 10));

    let status: DisputeStatus | undefined;

    if (params.status) {
        const validStatuses = Object.values(DisputeStatus);

        if (!validStatuses.includes(
            params.status as DisputeStatus,
        )) {
            throw new Error(
                `Invalid dispute status: ${params.status}`,
            );
        }

        status = params.status as DisputeStatus;
    }

    const filters: {
        customerId?: string;
        status?: DisputeStatus;
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

    const result = await findDisputes(filters);

    return {
        data: result.disputes,
        pagination: {
            page,
            limit,
            total: result.total,
            totalPages: Math.ceil(result.total / limit),
        },
    };
}

export async function getDisputeById(id: string) {
    return findDisputeById(id);
}

export async function createNewDispute(
    params: CreateDisputeParams,
) {
    const {
        transactionId,
        customerId,
        reason,
        description,
    } = params;

    if (!transactionId) {
        throw new Error("Transaction ID is required");
    }

    if (!customerId) {
        throw new Error("Customer ID is required");
    }

    if (!reason?.trim()) {
        throw new Error("Dispute reason is required");
    }

    if (!description?.trim()) {
        throw new Error("Dispute description is required");
    }

    const transaction = await prisma.transaction.findUnique({
        where: {
            id: transactionId,
        },
    });

    if (!transaction) {
        throw new Error("Transaction not found");
    }

    if (transaction.customerId !== customerId) {
        throw new Error(
            "Transaction does not belong to customer",
        );
    }

    const dispute = await createDispute({
        transactionId,
        customerId,
        reason: reason.trim(),
        description: description.trim(),
    });

    return dispute;
}
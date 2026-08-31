import { Request, Response } from "express";
import { getDisputeById, getDisputes, createNewDispute } from "../services/dispute.service.js";

export async function createDisputeController(req: Request, res: Response) {
    try {
        const { transactionId, customerId, reason, description } = req.body;

        const dispute = await createNewDispute({
            transactionId,
            customerId,
            reason,
            description,
        });

        res.status(201).json({
            data: dispute,
        });
    } catch (error) {
        console.error("Failed to create dispute:", error);

        const message = error instanceof Error ? error.message : "Failed to create dispute";

        if (message === "Transaction not found" || message === "Transaction does not belong to customer") {
            res.status(400).json({
                error: message,
            });
            return;
        }

        res.status(500).json({
            error: "Failed to create dispute",
        });
    }
}

export async function getDisputesController(req: Request, res: Response) {
    try {
        const page = Number(req.query.page ?? 1);
        const limit = Number(req.query.limit ?? 10);

        const params: {
            customerId?: string;
            status?: string;
            page: number;
            limit: number
        } = {
            page,
            limit,
        };

        const { customerId, status } = req.query;

        if (typeof customerId === "string") {
            params.customerId = customerId;
        }

        if (typeof status === "string") {
            params.status = status;
        }

        const result = await getDisputes(params);

        res.status(200).json(result);
    } catch (error) {
        console.error("Failed to retrieve disputes:", error);

        res.status(500).json({
            error: "Failed to retrieve disputes",
        });
    }
}

export async function getDisputeByIdController(req: Request, res: Response) {
    try {
        const { id } = req.params;

        if (!id || Array.isArray(id)) {
            res.status(400).json({
                error: "Invalid dispute ID",
            });
            return;
        }

        const dispute = await getDisputeById(id);

        if (!dispute) {
            res.status(404).json({
                error: "Dispute not found",
            });
            return;
        }

        res.status(200).json({
            data: dispute,
        });
    } catch (error) {
        console.error("Failed to retrieve dispute:", error);

        res.status(500).json({
            error: "Failed to retrieve dispute",
        });
    }
}
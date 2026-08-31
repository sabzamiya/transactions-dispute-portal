import { Request, Response } from "express";
import {
  getTransactionById,
  getTransactions,
} from "../services/transaction.service.js";

export async function getTransactionsController(
  req: Request,
  res: Response,
) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const customerId =
      typeof req.query.customerId === "string"
        ? req.query.customerId
        : undefined;

    const status =
      typeof req.query.status === "string"
        ? req.query.status
        : undefined;

    const result = await getTransactions({
      page,
      limit,
      ...(customerId && { customerId }),
      ...(status && { status }),
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Failed to retrieve transactions:", error);

    res.status(500).json({
      error: "Failed to retrieve transactions",
    });
  }
}

export async function getTransactionByIdController(
  req: Request,
  res: Response,
) {
  try {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      res.status(400).json({
        error: "Invalid transaction ID",
      });
      return;
    }

    const transaction = await getTransactionById(id);

    if (!transaction) {
      res.status(404).json({
        error: "Transaction not found",
      });
      return;
    }

    res.status(200).json({
      data: transaction,
    });
  } catch (error) {
    console.error("Failed to retrieve transaction:", error);

    res.status(500).json({
      error: "Failed to retrieve transaction",
    });
  }
}
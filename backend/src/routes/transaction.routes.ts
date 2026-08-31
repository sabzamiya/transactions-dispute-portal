import { Router } from "express";
import { getTransactionByIdController, getTransactionsController } from "../controllers/transaction.controller.js";

const router = Router();

router.get("/", getTransactionsController);
router.get("/:id", getTransactionByIdController);

export default router;
import { Router } from "express";

import { getDisputeByIdController, getDisputesController, createDisputeController } from "../controllers/dispute.controller.js";

const router = Router();

router.get("/", getDisputesController);

router.get("/:id", getDisputeByIdController);

router.post("/", createDisputeController);

export default router;
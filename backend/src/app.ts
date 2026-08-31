import express from "express";
import cors from "cors";

import transactionRoutes from "./routes/transaction.routes.js";
import disputeRoutes from "./routes/dispute.routes.js";

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
    }),
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
    res.status(200).json({
        status: "ok",
        service: "transactions-dispute-api",
        timestamp: new Date().toISOString(),
    });
});

app.use("/api/transactions", transactionRoutes);
app.use("/api/disputes", disputeRoutes);

export default app;
import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import helmet from "helmet";
import transactionsRouter from "./routes/transactions/transactions.router";
import authRouter from "./routes/auth/auth.router";

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/transactions", transactionsRouter);
app.use("/auth", authRouter);

export default app;

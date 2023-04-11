import express from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./router";
import type { Request, Response, NextFunction } from "express";

const app = express();

app.use(cors());
app.use(express.json());

// Logger
app.use(morgan("common"));

// Router
app.use(router);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: err.name, message: err.message });
});

export default app;

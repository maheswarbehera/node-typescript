import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript Node Server!");
});

// Start server
app.get("/api/v1", (req: Request, res: Response) => {
    res.send("Hello, TypeScript Node Server!");
}); 

export default app;

import express from "express";
import mongoose from "mongoose";
//morgan is a logger middleware for node.js HTTP requests
import morgan from "morgan";
import authRouter from "./routes/auth.router.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authRouter);

export default app;

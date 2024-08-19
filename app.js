import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import userRouter from "./router/userRouter.js";

const app = express();
config({ path: "./config.env" });

// Correctly reference the FRONTEND_URL environment variable
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Use the actual environment variable
    credentials: true, // Enable sending cookies with the request
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("*", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Ok",
  });
});

app.use("/user", userRouter);

dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

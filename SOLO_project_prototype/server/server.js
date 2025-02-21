import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./routes/product.routes.js";
import userRouter from "./routes/user.routes.js";
import { dbConnect } from "./config/mongoose.config.js";
const app = express();
app.use(express.json(), cors());
dotenv.config();
const PORT = process.env.PORT;
dbConnect()

app.use("/api", userRouter);
app.use(userRouter, productRouter)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

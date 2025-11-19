import express from "express";
import { env } from "./lib/env.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.listen(env.port, () => {
  console.log(`Server is running on localhost:${env.port}`);
});

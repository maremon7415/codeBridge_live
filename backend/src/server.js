import express from "express";
import { env } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working!");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(env.port, () =>
      console.log(`Server is running on localhost:${env.port}`)
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
startServer();

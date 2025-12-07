import express from "express";
import { env } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { serve } from "inngest/express";
import { functions, inngest } from "./lib/inngest.js";
import { clerkMiddleware } from "@clerk/express";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: env.clientUrl, //frontend client url
    credentials: true,
  })
);
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("Api is working");
});
app.use("api/chat", chatRoutes);

// Inngest Route
app.use("/api/inngest", serve({ client: inngest, functions }));

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(env.port, () =>
      console.log(`Server is running on http://localhost:${env.port}`)
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

startServer();

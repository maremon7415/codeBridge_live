import express from "express";
import { env } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import path from "path";
import { serve } from "inngest/express";
import { functions, inngest } from "./lib/inngest.js";

const app = express();

// 1. Middleware
app.use(express.json());
app.use(cors({ origin: env.clientUrl || true, credentials: true }));

const __dirname = path.resolve();

// API Routes (Must be defined before static files)
app.use("/api/inngest", serve({ client: inngest, functions }));

console.log("CurrentPath", env.node);

// Production Deployment Logic
if (env.node === "production") {
  // Serve static files from the frontend build folder
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is working!");
  });
}

// (if in production) it wasn't a static file or frontend route.
app.use((req, res, next) => {
  res.status(404).json({ error: "Not found" });
});

//Global Error Handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

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

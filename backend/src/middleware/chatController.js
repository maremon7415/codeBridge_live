import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    const token = chatClient.createToken(req.user.clerkId);
    res.status(200).json({
      token,
      userId: req.user.id,
      userName: req.user.name,
      userImage: req.user.image,
    });
  } catch (error) {
    console.error("Error creating Stream token:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

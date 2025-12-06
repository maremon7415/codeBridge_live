import { StreamChat } from "stream-chat";
import { env } from "./env.js";

const apiKey = env.streamApiKey;
const apiSecret = env.streamApiSecret;

if (!apiKey || !apiSecret) {
  throw new Error("Missing Stream API credentials");
}

// Singleton instance for server-side client
export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
  } catch (error) {
    console.error("Error upserting Stream user:", error);
    throw error;
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
  } catch (error) {
    console.error("Error deleting Stream user:", error);
    throw error;
  }
};

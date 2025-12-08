import { StreamChat } from "stream-chat";
import { env } from "./env.js";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = env.streamApiKey;
const apiSecret = env.streamApiSecret;

if (!apiKey || !apiSecret) {
  throw new Error("Missing Stream API credentials");
}

// Singleton instance for server-side client
export const streamClient = new StreamClient(apiKey, apiSecret); //this is for stream feature
export const chatClient = StreamChat.getInstance(apiKey, apiSecret); //this is for chat user

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

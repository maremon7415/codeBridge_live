import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";

// Initialize Inngest Client
export const inngest = new Inngest({ id: "codebridge" });

// Function 1: Sync User
const syncUser = inngest.createFunction(
  // 1. Config (ID & Name)
  {
    id: "sync-user",
    name: "Sync user on Clerk create",
  },
  // 2. Trigger (When it runs)
  {
    event: "clerk/user.created",
  },
  // 3. Handler (The Code)
  async ({ event }) => {
    try {
      await connectDB();
      const { id, email_addresses, first_name, last_name, image_url } =
        event.data || {};

      const email = email_addresses?.[0]?.email_address || null;
      const name = `${first_name || ""} ${last_name || ""}`.trim();

      if (!id) {
        console.error("sync-user: missing user id in event.data", event);
        return;
      }

      const newUser = {
        clerkId: id,
        name,
        email,
        profileImage: image_url || null,
      };

      const existing = await User.findOne({ clerkId: id });
      if (existing) {
        await User.updateOne({ clerkId: id }, { $set: newUser });
        console.log("sync-user: updated existing user", id);
      } else {
        await User.create(newUser);
        console.log("sync-user: created user", id);
      }
    } catch (err) {
      console.error("sync-user error:", err);
      throw err;
    }
  }
);

// Function 2: Delete User
const deleteUser = inngest.createFunction(
  // 1. Config
  {
    id: "delete-user-from-db",
    name: "Delete user on Clerk delete",
  },
  // 2. Trigger
  {
    event: "clerk/user.deleted",
  },
  // 3. Handler
  async ({ event }) => {
    try {
      await connectDB();
      const { id } = event.data || {};

      if (!id) {
        console.error(
          "delete-user-from-db: missing user id in event.data",
          event
        );
        return;
      }

      await User.deleteOne({ clerkId: id });
      console.log("delete-user-from-db: deleted user", id);
    } catch (err) {
      console.error("delete-user-from-db error:", err);
      throw err;
    }
  }
);

// Export functions for the API route to use
export const functions = [syncUser, deleteUser];

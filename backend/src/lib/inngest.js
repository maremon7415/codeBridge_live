import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "codebridge" });

const syncUser = inngest.createFunction(
  {
    id: "sync-user",
    name: "Sync user on Clerk create",
    event: "clerk/user.created",
  },
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

const deleteUser = inngest.createFunction(
  {
    id: "delete-user-from-db",
    name: "Delete user on Clerk delete",
    event: "clerk/user.deleted",
  },
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

export const functions = [syncUser, deleteUser];

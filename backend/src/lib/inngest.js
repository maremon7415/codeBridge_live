import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";
import { deleteStreamUser, upsertStreamUser } from "./stream.js";

export const inngest = new Inngest({ id: "codebridge" });

const syncUser = inngest.createFunction(
  {
    id: "sync-user",
    name: "Sync user on Clerk create",
  },
  {
    event: "clerk/user.created",
  },
  async ({ event }) => {
    try {
      await connectDB();
      const { id, email_addresses, first_name, last_name, image_url } =
        event.data || {};

      if (!id) {
        console.error("sync-user: missing user id", event);
        return;
      }

      const email = email_addresses?.[0]?.email_address || null;
      const name = `${first_name || ""} ${last_name || ""}`.trim();

      const userData = {
        clerkId: id,
        name,
        email,
        profileImage: image_url || null,
      };

      await User.findOneAndUpdate(
        { clerkId: id },
        { $set: userData },
        { upsert: true, new: true }
      );

      // Sync with Stream Chat
      await upsertStreamUser({
        id: id,
        name: name,
        image: image_url,
      });

      console.log("sync-user: processed successfully", id);
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
  },
  {
    event: "clerk/user.deleted",
  },
  async ({ event }) => {
    try {
      await connectDB();
      const { id } = event.data || {};

      if (!id) {
        console.error("delete-user: missing user id", event);
        return;
      }

      await User.deleteOne({ clerkId: id });
      await deleteStreamUser(id);

      console.log("delete-user: processed successfully", id);
    } catch (err) {
      console.error("delete-user error:", err);
      throw err;
    }
  }
);

export const functions = [syncUser, deleteUser];

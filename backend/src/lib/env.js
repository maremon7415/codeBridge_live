import dotenv from "dotenv";
dotenv.config({ quiet: true });

export const env = {
  port: process.env.PORT,
  mongodbURI: process.env.MONGODB_URI,
  node: process.env.NODE_ENV,
  clerkPublicKey: process.env.CLERK_PUBLISHABLE_KEY,
  clerkSecretKey: process.env.CLERK_SECRET_KEY,
  ingestEventKey: process.env.INNGEST_EVENT_KEY,
  ingestSigninKey: process.env.INNGEST_SIGNIN_KEY,
  streamApiKey: process.env.STREAM_API_KEY,
  streamApiSecret: process.env.STREAM_API_SECRET,
  clientUrl: process.env.CLIENT_URL,
};

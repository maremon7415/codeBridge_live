import dotenv from "dotenv";
dotenv.config({ quiet: true });

export const env = {
  port: process.env.PORT,
  mongodbURI: process.env.MONGODB_URI,
  node: process.env.NODE,
};

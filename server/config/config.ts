import dotenv from "dotenv";
dotenv.config();

export const MONGO_URL: string = process.env.MONGO_DB_CNN!;
export const MONGO_DATABASE: string = process.env.MONGO_DATABASE!;
export const MONGO_USER: string = process.env.MONGO_USER!;
export const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD!;
export const MONGO_HOST: string = process.env.MONGO_HOST || "localhost";
export const PORT: string = process.env.PORT!;

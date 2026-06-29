import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in the environment variables");
}

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables");
}

if (!process.env.Gooogle_Client_id) {
  throw new Error("Gooogle_Client_id is not defined in the environment variables");
}

if (!process.env.Google_Client_Secrete) {
  throw new Error("Google_Client_Secrete is not defined in the environment variables");
}

if (!process.env.Google_refresh_token) {
  throw new Error("Google_refresh_token is not defined in the environment variables");
}

if (!process.env.Google_user) {
  throw new Error("Google_user is not defined in the environment variables");
}


const config = {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  Gooogle_Client_id:process.env.Gooogle_Client_id,
  Google_Client_Secrete:process.env.Google_Client_Secrete,
  Google_refresh_token:process.env.Google_refresh_token,
  Google_user:process.env.Google_user,
};

export default config;

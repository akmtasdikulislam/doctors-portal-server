process.removeAllListeners("warning");
console.clear();

// Import required dependencies
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getCurrentTime } from "./functions/getCurrentTime";

// Require and configure Dotenv
dotenv.config();

// Initialize express app
const app = express();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Basic middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Define port number for the server
const PORT = 3000;

// Define root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server and listen on specified port
app.listen(PORT, () => {
  console.log(`${getCurrentTime()}\tServer is running on port ${PORT}`);
});

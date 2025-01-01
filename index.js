// Import required dependencies
const express = require("express");
const cors = require("cors");

// Initialize express app
const app = express();

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
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const path = require("path");
const app = express();

// Serve all static files from frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

// Default route → home.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/home.html"));
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

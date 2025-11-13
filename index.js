// index.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",         // change if you have a different username
  password: "@Silani12",         // put your MySQL password if any
  database: "airline_system" // your DB name
});

// ✅ Test database connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database!");
});

// ✅ API route for booking
app.post("/book", (req, res) => {
  const { name, email, phone, flight_id } = req.body;

  if (!name || !email || !phone || !flight_id) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO bookings (name, email, phone, flight_id) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, phone, flight_id], (err, result) => {
    if (err) {
      console.error("❌ Database Error:", err);
      return res.status(500).json({ message: "Database Error" });
    }
    res.json({ message: "✅ Booking successful!" });
  });
});

// ✅ Run server
app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));

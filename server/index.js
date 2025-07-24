import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Contact from "./models/Contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS configuration for both localhost and deployed frontend
const allowedOrigins = [
  "http://localhost:5173",               // local frontend
  "https://prjct2-1.onrender.com"        // deployed frontend
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  })
);

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ POST /contact route
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Message saved successfully!" });
  } catch (err) {
    console.error("❌ Contact error:", err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

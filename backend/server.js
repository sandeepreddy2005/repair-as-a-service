const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* ======================
   Middleware
====================== */
app.use(cors());
app.use(express.json());

/* ======================
   MongoDB Connection
====================== */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

/* ======================
   Schema & Model
====================== */
const RepairSchema = new mongoose.Schema(
  {
    customerFullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    category: { type: String, required: true },
    itemType: { type: String, required: true },
    problem: { type: String, required: true },
    pickupDate: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

const Repair = mongoose.model("Repair", RepairSchema);

/* ======================
   Routes
====================== */

// Health check
app.get("/", (req, res) => {
  res.send("Repair-as-a-Service Backend is running 🚀");
});

// Create repair request
app.post("/repair-request", async (req, res) => {
  try {
    const repair = new Repair(req.body);
    await repair.save();
    res.status(201).json({ message: "Repair request saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving repair request" });
  }
});

// View all repair requests (optional)
app.get("/repairs", async (req, res) => {
  try {
    const repairs = await Repair.find().sort({ createdAt: -1 });
    res.json(repairs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching repairs" });
  }
});

/* ======================
   Server
====================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

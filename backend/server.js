const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

/* Middleware */
app.use(cors());
app.use(express.json());

/* MongoDB Connection */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


/* Schema */
const RepairSchema = new mongoose.Schema({
  itemType: String,
  problem: String,
  address: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/* Model */
const Repair = mongoose.model("Repair", RepairSchema);

/* Routes */
app.post("/repair-request", async (req, res) => {
  try {
    const repair = new Repair(req.body);
    await repair.save();
    res.json({ message: "Repair request saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving repair request" });
  }
});

/* Server */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

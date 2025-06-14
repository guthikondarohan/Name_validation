const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
console.log("[INFO] CORS enabled and JSON parser set up");

const uri = "mongodb+srv://guthikondarohan:Rohan%40123@cluster0.942dmhi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
console.log("[INFO] MongoDB URI loaded");

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("[SUCCESS] MongoDB connected"))
  .catch(err => {
    console.error("[ERROR] MongoDB connection error:", err);
    process.exit(1); // 🛡️ Stop server if DB connection fails
  });

const entrySchema = new mongoose.Schema({
  name: String,
  date: String
});
const Entry = mongoose.model('Entry', entrySchema);

app.post('/api/submit', async (req, res) => {
  const { name, date } = req.body;
  console.log(`[INFO] Received submission: Name="${name}", Date="${date}"`);

  // ✅ Validation check
  if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
    console.warn(`[VALIDATION] Name failed validation: "${name}"`);
    return res.status(400).json({ error: 'Name contains special characters' });
  }

  try {
    const entry = new Entry({ name, date });
    await entry.save();
    console.log(`[SUCCESS] Data saved for name="${name}"`);
    res.status(200).json({ message: "Data saved successfully." });
  } catch (err) {
    console.error("[ERROR] Failed to save data:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => console.log(`[SERVER] Server running on port ${port}`));

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const whatsappRoutes = require("./routes/whatsappRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/whatsapp", whatsappRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "your whatsapp otp backend is running"
  });
});

app.listen(port, () => {
  console.log(`backend is running http://localhost:${port}`);
});
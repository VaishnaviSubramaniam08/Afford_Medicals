const express = require("express");
const cors = require("cors");
require("dotenv").config();

const notificationRoutes = require("./routes/notificationRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);

app.use("/notifications", notificationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
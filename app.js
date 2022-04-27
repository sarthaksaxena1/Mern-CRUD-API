const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middleware/errorHandler");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Started on ${port}`);
});

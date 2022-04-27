const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected Successfully`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");
const { DB } = require("../../config/constants");

const URI = `mongodb+srv://${DB.USER}:${DB.PASS}@${DB.HOST}/${DB.NAME}`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(`Connection established: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Connection failed: ${err.message}`);
  }
};

module.exports = { connectDB };

const mongoose = require("mongoose");
const { DB_URL, NODE_ENV, PROD_DB_URL } = require("./env.config");
async function connectDB() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(DB_URL);
      console.log("Connected to Notification Local DB!!!");
    } else {
      await mongoose.connect(PROD_DB_URL);
      console.log("Connected to Notification  Production DB!!!");
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
module.exports = connectDB;

const mongoose = require("mongoose");
const colors = require("colors");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {});
    console.log(`Database Connected Succefully ${conn.connection.host}`.bgBlue);
  } catch (error) {
    console.log(`error : ${error.message}`);
  }
};

module.exports = dbConnect;

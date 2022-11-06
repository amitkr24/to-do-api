const mongoose = require("mongoose"); //required mongoose
require("dotenv").config();
const database = process.env.DB_URL;

mongoose.connect(database); //connection to db
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connection to MongoDB!")); //if error occured

db.once("open", function () {
  //if connected successfully
  console.log("Successfully connected to monogoDb");
});

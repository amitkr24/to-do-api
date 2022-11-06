const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("./config/mongoose");
const passport = require("passport");
const jwtPassportStrategy = require("./config/jwt-passport"); //passport jwt config file

const router = require("./routes/index");

app.use(express.urlencoded()); //to parse form data

app.use("/", router); //set route

// server created
app.listen(port, () => {
  console.log(`Server Created Successfully ${port}`);
});

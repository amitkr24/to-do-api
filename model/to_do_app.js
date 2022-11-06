const mongoose = require("mongoose");
to_do_Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const To_do_app = mongoose.model("To_do_app", to_do_Schema); //modelling the schema
module.exports = To_do_app;

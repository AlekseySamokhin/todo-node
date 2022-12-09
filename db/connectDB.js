const mongoose = require("mongoose");

const { URL } = require("../config");

const connectToDB = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.set("strictQuery", true).connect(URL, connectionParams);

    console.log("Connected to database.");
  } catch (err) {
    console.error("Could not connect to database.", err);
  }
};

module.exports = connectToDB;

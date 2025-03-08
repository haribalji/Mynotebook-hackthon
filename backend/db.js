
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Subject = require("./models/Subject"); // Import Subject model


dotenv.config();

const mongoURI = process.env.mongoURI;//here the db url  of your own need to be present

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true, // Still recommended
      useUnifiedTopology: true 

    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = connectToMongo;


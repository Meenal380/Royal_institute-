const mongoose = require("mongoose");
const Listing = require("../models/listing");
const { data: sampleListings } = require("./data");

require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

const main = async () => {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to DB");

  await Listing.deleteMany({});
  await Listing.insertMany(sampleListings);
  console.log("Data was initialized");

  mongoose.connection.close();
};

main();

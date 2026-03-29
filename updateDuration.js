const mongoose = require("mongoose");
const Listing = require("./models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/ROYAL_INSTITUTE";

const updateDuration = async () => {
  await mongoose.connect(MONGO_URL);
  console.log("DB connected");

  const result = await Listing.updateMany(
    { duration: { $exists: false } }, // jisme duration nahi hai
    { $set: { duration: "3 months" } }
  );

  console.log("Updated listings:", result.modifiedCount);

  mongoose.connection.close();
};

updateDuration();

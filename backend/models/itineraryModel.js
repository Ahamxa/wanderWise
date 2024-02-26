import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    place: {
      type: String,
      required: true,
      trim: true,
    },
    days: {
      type: Number, // Corrected spelling of "Integer"
      required: true,
      unique: true,
    },
    companions: {
      type: [String], // Array of strings for multiple choices
      required: true,
    },
    interests: {
      type: [String], // Array of strings for multiple choices and other option
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("itineraries", userSchema);

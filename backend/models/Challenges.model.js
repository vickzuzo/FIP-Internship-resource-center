const mongoose = require("mongoose");

const challengesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    learningPath: { type: String, required: true },
    duration: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.model("Challenge", challengesSchema);

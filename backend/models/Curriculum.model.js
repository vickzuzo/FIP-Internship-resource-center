const mongoose  = require("mongoose");

const curriculumModel = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    learningPath: { type: String, required: true },
    topics: [{ type: String }],
    duration: { type: String, required: true },
    type: { type: String, required: true },
    externalLinks: [{}],
  },
  { timestamps: true }
);

mongoose.model("Curriculum", curriculumModel);

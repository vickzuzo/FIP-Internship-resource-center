const mongoose = require("mongoose");

const scheduledMeetingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    time: { type: String, required: true },
    date: { type: String, required: true },
    mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

mongoose.model("ScheduledMeeting", scheduledMeetingSchema);

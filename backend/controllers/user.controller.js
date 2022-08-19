const mongoose = require("mongoose");
const { sendMail } = require("../utils/sendMail");
const User = mongoose.model("User");
const Curriculum = mongoose.model("Curriculum");
const Challenge = mongoose.model("Challenge");
const ScheduledMeeting = mongoose.model("ScheduledMeeting");

exports.scheduleMeeting = async (req, res) => {
  const { userId, mentorId, date, time } = req.body;
  try {
    const user = await User.findById(userId);
    const mentor = await User.findById(mentorId);
    if (!user) {
      return res.status(400).send("User not found");
    }
    if (!mentor) {
      return res.status(400).send("Mentor not found");
    }

    const scheduledMeeting = ScheduledMeeting.create({
      userId: user._id,
      mentorId: mentor._id,
      date,
      time,
    });

    await sendMail({
      to: mentor.email,
      subject: "Meeting Schedule Request",
      text: `${user.fullName} has requested a meeting with you on ${date} at ${time}`,
    });

    await sendMail({
      to: user.email,
      subject: "Meeting Scheduled",
      text: `Your meeting with ${mentor.fullName} has been scheduled on ${date} at ${time}, Awaiting confirmation from the mentor. You will be notified as soon as the mentor confirms your meeting.`,
    });

    return res.status(200).send({ message: "success", scheduledMeeting });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.getAllUserMentors = async (req, res) => {
  const userId = req.user._id;

  try {
    const user = await User.findById(userId).populate("mentors");
    if (!user) {
      return res.status(400).send("User not found");
    }
    return res.status(200).send({ mentors: user.mentors });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.getUserCurriculum = async (req, res) => {
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    const curriculums = await Curriculum.find({
      learningPath: user.learningPath,
    });

    if (!user) {
      return res
        .status(400)
        .send("User session expired. Please logout and login again");
    }
    return res.status(200).send({ curriculums });
  } catch (error) {
    return res.status(500).send(error);
  }
};


exports.getUserChallenges = async (req, res) => {
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    const challenges = await Challenge.find({
      learningPath: user.learningPath,
    });

    if (!user) {
      return res
        .status(400)
        .send("User session expired. Please logout and login again");
    }
    return res.status(200).send({ challenges });
  } catch (error) {
    return res.status(500).send(error);
  }
}

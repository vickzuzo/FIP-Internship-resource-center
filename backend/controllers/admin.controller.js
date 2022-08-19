const mongoose = require("mongoose");
const User = mongoose.model("User");
const Curriculum = mongoose.model("Curriculum");
const Challenge = mongoose.model("Challenge");

exports.getAllUsers = async (req, res) => {
  try {
    const interns = await User.find({ type: "intern" });
    return res.status(200).send({ interns });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await User.find({ type: "mentor" });
    return res.status(200).send({ mentors });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await User.find({ type: "admin" });
    return res.status(200).send({ admins });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.assignMentor = async (req, res) => {
  const { internId, mentorId, learningLevel } = req.body;
  try {
    const user = await User.findById(internId);
    const mentor = await User.findById(mentorId);
    if (!user || !mentor) {
      return res.status(400).send("User or mentor not found");
    }
    await User.findByIdAndUpdate(
      internId,
      { $push: { mentors: mentorId }, learningLevel },
      { new: true, useFindAndModify: false }
    );
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.addNewMentor = async (req, res) => {
  const { internId, role } = req.body;
  try {
    const mentor = await User.findById(internId);
    if (!mentor) {
      return res.status(400).send("User not found");
    }
    await User.findOneAndUpdate(
      { _id: internId },
      { $set: { type: role } },
      { new: true, useFindAndModify: false }
    );

    return res.status(200).send({ mentor });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.editUser = async (req, res) => {
  const { internId, learningLevel } = res.body;

  try {
    const intern = await User.findById(internId);

    if (!intern) {
      return res.status(400).send("Intern not found");
    }

    await User.findByIdAndUpdate(
      internId,
      { learningLevel },
      { new: true, useFindAndModify: false }
    );
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.createCurriculum = async (req, res) => {
  const {
    title,
    description,
    learningPath,
    topics,
    duration,
    type,
    externalLinks,
  } = req.body;
  try {
    const curriculum = Curriculum.create({
      title,
      description,
      learningPath,
      topics,
      duration,
      type,
      externalLinks,
    });
    return res
      .status(200)
      .send({ message: "Currculum Created Successfully", curriculum });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.createChallenge = async (req, res) => {
  const { title, description, learningPath, duration } = req.body;

  try {
    const challenge = await Challenge.create({
      title,
      description,
      learningPath,
      duration,
    });
    return res
      .status(200)
      .send({ message: "Challenge Created Successfully", challenge });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.deleteChallenge = async (req, res) => {
  const { challengeId } = req.body;
  try {
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      return res.status(400).send("Challenge not found");
    }
    await Challenge.findByIdAndDelete(challengeId);
    return res.status(200).send("Challenge deleted successfully");
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.deleteCurriculum = async (req, res) => {
  const { curriculumId } = req.body;
  try {
    const curriculum = await Curriculum.findById(curriculumId);
    if (!curriculum) {
      return res.status(400).send("Curriculum not found");
    }
    await Curriculum.findByIdAndDelete(curriculumId);
    return res.status(200).send("Curriculum deleted successfully");
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.addUserLearningLevel = async (req, res) => {
  const { userId, level } = req.body;
  try {
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(400).send("User not found");
    }
    const user = await User.findByIdAndUpdate(
      userId,
      {
        learningLevel: level,
      },
      { new: true, useFindAndModify: false }
    );
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// exports.createNewLearningPath = async (req, res) => {
//   const { title, description,  type } = req.body;
//   try {
//     const learningPath = await LearningPath.create({
//       title,
//       description,
//       duration,
//       type,
//     });
//     return res
//       .status(200)
//       .send({ message: "Learning Path Created Successfully", learningPath });
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// }

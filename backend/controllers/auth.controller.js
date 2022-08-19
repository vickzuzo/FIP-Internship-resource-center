const mongoose = require("mongoose");
const { generateAccessToken } = require("../utils/generateAccessToken");
const { generateCode } = require("../utils/generateCode");
const { reusable } = require("../utils/reusable");
const User = mongoose.model("User");
const { sendMail } = require("../utils/sendMail");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).send("Please provide a valid email and password");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send("Email not found!, Please create an acount to continue.");
    }

    if (!user.isEmailVerified) {
      return res.status(400).send("Please verify your email address.");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).send("Invalid credentials!, Please try again.");
    }

    const accessToken = generateAccessToken(user._id, user.email);
    return res
      .status(200)
      .send({ message: "Logged in successfully", user, accessToken });
  } catch (error) {
    console.log("login error", error);
    return res.status(500).send(error);
  }
};

exports.register = async (req, res) => {
  const { email, password, fullName, learningPath } = req.body;

  try {
    if (!email || !password || !fullName || !learningPath) {
      return res
        .status(400)
        .send(
          "Please provide a valid email, password, fullName and learning Path"
        );
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).send("Opps!!, Email already in use!!");
    }
    const verificationCode = generateCode();

    const user = await User.create({
      email,
      password,
      fullName,
      verificationCode,
      learningPath,
    });

    await sendMail({
      to: email,
      subject: "Verify your email",
      text: `Dear ${fullName}, Your verification code is ${verificationCode}, use the code above to complete your registration`,
    });

    return res
      .status(201)
      .send({ message: "Account created Successfully!", user });
  } catch (error) {
    console.log(error);
    return res.status(500).send(reusable.error);
  }
};

exports.verifyAccount = async (req, res) => {
  const { email, code } = req.body;
  if (!email || !code) {
    return res
      .status(400)
      .send("Please provide a valid email and vefication code");
  }

  try {
    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      return res.status(404).send("Email not found!");
    }
    if (user.verificationCode !== code) {
      return res.status(400).send("Incorrect Verification Code");
    }

    await User.findOneAndUpdate(
      { email },
      { isEmailVerified: true, status: "active" },
      { new: true, useFindAndModify: false }
    ).then(async (doc) => {
      await sendMail({
        to: email,
        subject: "Welcome ",
        text: `Dear ${doc.fullName}, We welcome you to Flexisaf Intership Platform (FIP), a platform to learn and improve on base skills.`,
      });
      return res
        .status(200)
        .send({ message: "Account verified successfully!", user: doc });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(reusable.error);
  }
};

exports.getCurrentUser = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send("Please provide a valid id");
  }

  try {
    const user = await User.findById(id).select("-password").populate("mentors");
    if (!user) {
      return res.status(404).send("User not found!");
    }
    return res.status(200).send({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).send(reusable.error);
  }
};

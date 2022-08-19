const express = require("express");
const {
  scheduleMeeting,
  getUserCurriculum,
  getUserChallenges,
} = require("../controllers/user.controller");
const requireAuth = require("../middlewares/requireAuth");
const userRouter = express.Router();
userRouter.use(requireAuth);

userRouter.route("/schedule_meeting").post(scheduleMeeting);
userRouter.route("/get_curriculums").get(getUserCurriculum);
userRouter.route("/get_challenges").get(getUserChallenges);

module.exports = userRouter;

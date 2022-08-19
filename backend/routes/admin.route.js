const express = require("express");
const {
  getAllUsers,
  getAllMentors,
  createCurriculum,
  createChallenge,
  deleteChallenge,
  deleteCurriculum,
  addUserLearningLevel,
  getAllAdmins,
  assignMentor,
  editUser,
  addNewMentor,
  getAllCurriculums,
  getAllNoLevelUsers,
} = require("../controllers/admin.controller");
const requireAdmin = require("../middlewares/requireAdmin");
const requireAuth = require("../middlewares/requireAuth");

const adminRouter = express.Router();
adminRouter.use(requireAuth);
// adminRouter.use(requireAdmin);

adminRouter.route("/get_all_users").get(getAllUsers);
adminRouter.route("/get_all_mentors").get(getAllMentors);
adminRouter.route("/get_all_admins").get(getAllAdmins);
adminRouter.route("/get_all_no_level_users").get(getAllNoLevelUsers);
adminRouter.route("/get_all_curriculums").get(getAllCurriculums);
adminRouter.route("/assign_mentor").post(assignMentor);
adminRouter.route("/add_new_mentor").post(addNewMentor);
// adminRouter.route("/edit_user").post(editUser);
adminRouter.route("/create_curriculum").post(createCurriculum);
adminRouter.route("/create_challenge").post(createChallenge);
adminRouter.route("/delete_challenge").delete(deleteChallenge);
adminRouter.route("/delete_curriculum").delete(deleteCurriculum);
adminRouter.route("/add_user_learning_level").post(addUserLearningLevel);

module.exports = adminRouter;

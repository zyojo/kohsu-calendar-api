const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  createProject,
  getSingleProject,
  updateProject,
  deleteProject,
} = require("../controllers/projects");

router.get("/", getAllProjects);
router.post("/", createProject);
router.get("/:id", getSingleProject);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;

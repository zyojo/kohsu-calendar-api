const Project = require("../models/Project");

const getAllProjects = async (req, res) => {
  try {
    const allProjects = await Project.find({});
    res.status(200).json(allProjects);
  } catch {
    res.status(500).json(err);
  }
};
const createProject = async (req, res) => {
  try {
    const createProject = await Project.create(req.body);
    res.status(200).json(createProject);
  } catch {
    res.status(500).json(err);
  }
};
const getSingleProject = async (req, res) => {
  try {
    const getSingleProject = await Project.findOne({ _id: req.params.id });
    if (!getSingleProject) {
      return res.status(404).json(`_id:${req.params.id}は存在しません。`);
    }
    res.status(200).json(getSingleProject);
  } catch {
    res.status(500).json(err);
  }
};
const updateProject = async (req, res) => {
  try {
    const updateProject = await Project.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updateProject) {
      return res.status(404).json(`_id:${req.params.id}は存在しません。`);
    }
    res.status(200).json(updateProject);
  } catch {
    res.status(500).json(err);
  }
};
const deleteProject = async (req, res) => {
  try {
    const deleteProject = await Project.findOneAndDelete({
      _id: req.params.id,
    });
    if (!deleteProject) {
      return res.status(404).json(`_id:${req.params.id}は存在しません。`);
    }
    res.status(200).json(deleteProject);
  } catch {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllProjects,
  createProject,
  getSingleProject,
  updateProject,
  deleteProject,
};

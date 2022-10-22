const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Project.find({});
    res.status(200).json(allUsers);
  } catch {
    res.status(500).json(err);
  }
};
const createUser = async (req, res) => {
  try {
    const createUser = await User.create(req.body);
    res.status(200).json(createUser);
  } catch {
    res.status(500).json(err);
  }
};
const getSingleUser = async (req, res) => {
  try {
    const getSingleUser = await User.findOne({ _id: req.params.id });
    if (!getSingleUser) {
      return res.status(404).json(`_id:${req.params.id}は存在しません。`);
    }
    res.status(200).json(getSingleUser);
  } catch {
    res.status(500).json(err);
  }
};
const updateUser = async (req, res) => {
  try {
    const updateUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updateUser) {
      return res.status(404).json(`_id:${req.params.id}は存在しません。`);
    }
    res.status(200).json(updateUser);
  } catch {
    res.status(500).json(err);
  }
};
const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findOneAndDelete({
      _id: req.params.id,
    });
    if (!deleteUser) {
      return res.status(404).json(`_id:${req.params.id}は存在しません。`);
    }
    res.status(200).json(deleteUser);
  } catch {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
};

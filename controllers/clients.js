const Client = require("../models/Client");

const getAllClients = async (req, res) => {
  try {
    const allClients = await Project.find({});
    res.status(200).json(allClients);
  } catch {
    res.status(500).json(err);
  }
};
const createClient = async (req, res) => {
  try {
    const createClient = await Client.create(req.body);
    res.status(200).json(createClient);
  } catch {
    res.status(500).json(err);
  }
};
const getSingleClient = async (req, res) => {
  try {
    const getSingleClient = await Client.findOne({ _id: req.params.id });
    if (!getSingleClient) {
      return res.status(404).json(`_id:${req.params.id}は存在しません。`);
    }
    res.status(200).json(getSingleClient);
  } catch {
    res.status(500).json(err);
  }
};
const updateClient = async (req, res) => {
  try {
    const updateClient = await Client.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updateClient) {
      return res.status(404).json(`_id:${req.params.id}は存在しません。`);
    }
    res.status(200).json(updateClient);
  } catch {
    res.status(500).json(err);
  }
};
const deleteClient = async (req, res) => {
  try {
    const deleteClient = await Client.findOneAndDelete({
      _id: req.params.id,
    });
    if (!deleteClient) {
      return res.status(404).json(`_id:${req.params.id}は存在しません。`);
    }
    res.status(200).json(deleteClient);
  } catch {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllClients,
  createClient,
  getSingleClient,
  updateClient,
  deleteClient,
};

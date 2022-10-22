const express = require("express");
const router = express.Router();
const {
  getAllClients,
  createClient,
  getSingleClient,
  updateClient,
  deleteClient,
} = require("../controllers/clients");

router.get("/", getAllClients);
router.post("/", createClient);
router.get("/:id", getSingleClient);
router.patch("/:id", updateClient);
router.delete("/:id", deleteClient);

module.exports = router;

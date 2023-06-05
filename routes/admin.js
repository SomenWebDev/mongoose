const express = require("express");
const router = express.Router();

router.get("/topsecret", (req, res) => {
  res.send("This is top secret");
});

router.get("/deleteEverything", (req, res) => {
  res.send("OK DELETED IT ALL");
});

module.exports = router;

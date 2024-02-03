const express = require("express");
const router = express.Router();

/** Todoos */
router.get("/todos", (req, res) => {
  res.send([{}]);
  // insert in database
});
router.post("/todos", (req, res) => {
  const { name, email } = req.body;
  console.log("🚀 ~ router.post ~ { name, email } :", { name, email });
  res.send("user created");
  // insert in database
});

router.patch("/todos/:id", (req, res) => {
  res.send({});
  // insert in database
});
router.get("/todos/:id", (req, res) => {
  res.send({});
  // insert in database
});
router.delete("/todos/:id", (req, res) => {
  res.send({});
  // insert in database
});

module.exports = router;

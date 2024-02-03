const express = require("express");
const path = require("path");
const fs = require("fs");
const User = require("../models/User");
const router = express.Router();
/** Users */

router.get("/", async (req, res, next) => {
  const users = await User.find();
  res.send(users);
  // const usersPath = path.join(__dirname, "us3ers.json");
  // // try {
  // //   const data = await fs.readFile(usersPath, "utf8");
  // //   res.send(data);
  // // } catch (err) {
  // //   const error = new Error(err?.message);
  // //   error.statusCode = 400;
  // //   next(error);
  // // }
  // fs.readFile(usersPath, (err, data) => {
  //   // if (err) next(new AppError("test",400))
  //   // {
  //   //   const error = new Error(err?.message);
  //   //   error.statusCode = 400;
  //   //   next(error);
  //   // }
  //   const users = JSON.parse(data);
  //   res.send(users);
  // });

  // insert in database
});
router.post("/", async (req, res) => {
  const { name, email } = req.body;
  const userCreated = await User.create({ name, email });
  res.status(201).send(userCreated);
  // insert in database
});

router.patch("/:id", async (req, res) => {
  res.send([]);
  // insert in database
});
router.get("/:id", (req, res) => {
  res.send({});
  // insert in database
});
router.delete("/:id", (req, res) => {
  res.send({});
  // insert in database
});

module.exports = router;

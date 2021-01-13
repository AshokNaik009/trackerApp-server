const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    //To do: Generate a different Secret Key
    const token = jwt.sign({ userId: user._id }, "DUMMY_SECRET_KEY");
    res.send({ token });
  } catch (error) {
    return res.status(422).send(error.message);
  }
});

module.exports = router;

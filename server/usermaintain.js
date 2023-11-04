import express from 'express';
import User from './user.js';
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  try {
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET USER
router.get("/find/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
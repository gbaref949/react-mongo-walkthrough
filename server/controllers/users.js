const { User} = require('../models/user.js'); //import models
//get tasks and returns them
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUsers = async (req, res) => {
  try {
    // Create a new user using the User model
    const newUser = new User(req.body);

    // Save the user to the database
    await newUser.save();

    // Respond with the newly created user
    res.status(201).json(newUser);
  } catch (error) {
    // Handle validation errors
    if (error.code === 11000) {
      res.status(400).json({ error: 'User with the same name already exists' });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
};

const deleteUsers = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the user by ID
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ success: false, msg: 'User not found' });
    }
    // Delete the user
    await user.remove();

    res.status(202).json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  createUsers,
  deleteUsers,
};

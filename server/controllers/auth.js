const bcrypt = require('bcrypt');
const generateToken = require('../helpers/generateToken');
const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: 'Username already exists',
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Generate and send JWT token
    const token = generateToken(newUser);
    return res.status(201).json({
      token,
      status: true,
      message: 'Successfully signed up!',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      error: error.message,
      message: 'Internal server error',
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find the user
    const user = await User.findOne({ email });

    // if no user exists
    if (!user) {
      return res.status(401).json({
        status: false,
        message: `User doesn't exists!`,
      });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: false,
        message: 'Invalid credentials',
      });
    }

    // Generate and send JWT token
    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: `Internal server error`,
      error,
    });
  }
};

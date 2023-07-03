const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    // console.log(token);

    if (!token) {
      return res.status(400).json({
        success: false,
        error: 'No token found!',
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
      if (err) {
        return res.status(403).json({
          success: false,
          error: 'Token not valid!',
        });
      }

      const loggedInUser = await User.findOne({ _id: user._id });

      loggedInUser.password = undefined;

      req.user = loggedInUser;
      next();
    });
  } else {
    res.status(401).json({
      success: false,
      error: 'You are not authenticated!',
    });
  }
};

module.exports = verifyToken;

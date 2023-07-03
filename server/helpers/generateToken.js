const jwt = require('jsonwebtoken');

// Generate JWT token
function generateToken(user) {
  const payload = {
    _id: user._id,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
}

module.exports = generateToken;

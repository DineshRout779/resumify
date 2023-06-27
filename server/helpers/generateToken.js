const jwt = require('jsonwebtoken');

// Generate JWT token
function generateToken(user) {
  const payload = {
    id: user._id,
    username: user.username,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
}

module.exports = generateToken;

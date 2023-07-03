const passport = require('passport');
const { signup, login } = require('../controllers/auth');
const generateToken = require('../helpers/generateToken');
const verifyToken = require('../helpers/verifyToken');
// const generateToken = require('../helpers/generateToken');
// const User = require('../models/User');

const CLIENT_URL = 'https://resumifyapp.vercel.app//success';

const router = require('express').Router();

router.post('/login', login);

router.post('/signup', signup);

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/login/failed', (req, res) => {
  return res.status(401).json({
    status: false,
    message: 'Login Failed!',
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/login/failed',
  }),
  (req, res) => {
    // Redirect the user to the client URL
    const token = generateToken(req.user);
    res.redirect(`${CLIENT_URL}?token=${token}`);
  }
);

router.get('/isauthenticated', verifyToken, async (req, res) => {
  try {
    if (req.user) {
      return res.status(200).json({
        success: true,
        user: req.user,
        message: 'User fetched successfully',
      });
    } else {
      return res.status(401).json({
        success: false,
        message: `You're not authorized`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: `You're not authorized`,
    });
  }
});

module.exports = router;

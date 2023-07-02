// Import packages
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('./models/User');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// configure environment variables
dotenv.config();

// Express Instance
const app = express();
const port = process.env.PORT || 5000;

// Set up middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Configure JWT strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:
        '5f55ecb1ca233d41dffb6fd9e307d37b9eb4dad472a9e7767e8727132b784461',
    },
    (payload, done) => {
      // Find the user by ID or other criteria and pass it to the 'done' callback
      User.findById(payload.id)
        .then((user) => {
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        })
        .catch((error) => done(error, false));
    }
  )
);

// Configure Google OAuth2.0 strategy
passport.use(
  new GoogleStrategy(
    {
      clientID:
        '761016329421-jpt2vgkdqtl35qrkeu8b7mv89oseoeep.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:5000/api/v1/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      // Use the Google profile data to find or create a user in your application's database
      // and pass it to the 'done' callback
      try {
        // Check if the user already exists in the database
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          // User already exists, return the user
          return done(null, user);
        } else {
          // Create a new user
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            profilePic: profile.photos[0].value,
            password: bcrypt.hashSync(process.env.DEFAULT_PASSWORD, 10),
          });

          // Save the user to the database
          await user.save();

          // Return the new user
          return done(null, user);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Database connection
connectDB();

// routes
app.get('/api/v1', (req, res) => {
  return res.status(200).json({
    status: true,
    message: 'Welcome to the API',
  });
});
app.use('/api/v1/auth', authRoutes);

app.get(
  '/api/v1/protected',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ message: 'Protected route accessed successfully' });
  }
);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

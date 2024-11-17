require('dotenv').config();
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const router = express.Router();

// Configure Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/callback', // Redirect URL after login
    },
    (accessToken, refreshToken, profile, done) => {
      // Save or process the user profile data
      console.log('Google Profile:', profile);
      done(null, profile); // Pass the profile to Passport
    }
  )
);

// Serialize user to store in session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send({ message: 'Unauthorized' });
};

// Google Login Route
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback Route
router.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: '/api/auth/failure' }),
  (req, res) => {
    res.send({ message: 'User authenticated successfully', user: req.user });
  }
);

// Logout Route
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.send({ message: 'User logged out successfully' });
  });
});

// Failure Route
router.get('/failure', (req, res) => {
  res.status(401).send({ message: 'Authentication failed' });
});

module.exports = { router, isAuthenticated };

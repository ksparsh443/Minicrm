const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const passport = require('passport'); // For Google OAuth
const session = require('express-session'); // For session management
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('./config/database'); // Import your database connection

// Initialize Express
const app = express();

// Middleware: Parse JSON bodies
app.use(bodyParser.json());

// Middleware: Session Management
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'default_secret', // Replace 'default_secret' with a secure key
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware: Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Configure Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/callback', // Ensure this matches your Google Cloud configuration
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Google Profile:', profile); // Log user profile data
      done(null, profile); // Pass the profile to Passport
    }
  )
);

// Serialize and Deserialize User
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Middleware: Check Authentication
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send({ message: 'Unauthorized' });
};

// Authentication Routes
app.get(
  '/api/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/api/auth/callback',
  passport.authenticate('google', { failureRedirect: '/api/auth/failure' }),
  (req, res) => {
    res.send({ message: 'User authenticated successfully', user: req.user });
  }
);

app.get('/api/auth/failure', (req, res) => {
  res.status(401).send({ message: 'Authentication failed' });
});

app.get('/api/auth/logout', (req, res) => {
  req.logout(() => {
    res.send({ message: 'User logged out successfully' });
  });
});

// Example Secured Route
app.get('/api/secured-route', isAuthenticated, (req, res) => {
  res.send({ message: 'Welcome to the secured route', user: req.user });
});

// Import Routes for Other Features
const customerRoutes = require('./routes/customer');
const orderRoutes = require('./routes/order');
const audiencesRouter = require('./routes/audience');
const campaignsRouter = require('./routes/campaigns');
const messagesRouter = require('./routes/message');
const statsRouter = require('./routes/stats'); // Import stats route

// Mount Routes
app.use('/api/customer', customerRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/audience', audiencesRouter);
app.use('/api/campaigns', campaignsRouter);
app.use('/api/message', messagesRouter);
app.use('/api/stats', statsRouter); // Use stats route

// 404 Error Handling for Undefined Routes
app.use((req, res) => {
  res.status(404).send({ message: 'Route not found' });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const cors = require('cors');
app.use(
  cors({
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true, // Allow cookies
  })
);


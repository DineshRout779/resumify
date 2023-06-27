// Import packages
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

// configure environment variables
dotenv.config();

// Express Instance
const app = express();
const port = process.env.PORT || 5000;

// Set up middlewares
app.use(express.json());
app.use(cors());

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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const taskRouter = require('./routes/taskRoutes');

const app = express();


// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/auth', authRoutes);
app.use('/task', taskRouter);

// Serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Serve index.html for any other requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../.client/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
const port = process.env.PORT || 4000;
// Start the server
app.listen(port, err => {
  err ? console.log(`Error: ${err}`) : console.log(`Server is running on port: ${port}`);
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const dbURI = 'mongodb+srv://arunknair2003:WQxDAYa5EBEWBJGZ@cluster0.dbylnkz.mongodb.net/Arun';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });

// API routes
const usersRoutes = require('./routes/users');
const blogsRoutes = require('./routes/blogs');
app.use('/api/users', usersRoutes);
app.use('/api/blogs', blogsRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend', 'build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
}

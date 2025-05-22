const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);


app.get('/', (req, res) => {
  res.send('API is running');
});

module.exports = app;
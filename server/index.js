const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');
const taskRoutes = require('./routes/tasks');
const PORT =  process.env.PORT || 5001;

connectDB();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


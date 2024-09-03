const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const { auth } = require('./middleware/auth');
const projectRoutes = require('./routes/projectRoutes');
const authRoutes = require('./routes/authRoutes');
dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('API Running'));

// Define Routes

app.use('/api/auth', authRoutes);

// Future routes: Project, User, etc.
// app.use('/api/projects', require('./routes/projectRoutes'));
// Use the routes
// app.use('/api/projects', projectRoutes);

app.use('/uploads', express.static('uploads'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

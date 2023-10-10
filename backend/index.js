const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.static('public'));

// View engine
app.set('view engine', 'ejs');

// Database connection
const dbURI = 'mongodb+srv://soprano:Omarajimiii@cluster0.wktz9qc.mongodb.net/TAYARA';

async function startServer() {
    try {
        // Connect to MongoDB
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        // Start the Express server
        const port = process.env.PORT || 3002;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

// Routes
app.get('/', (req, res) => res.render('home'));
app.get('/home', (req, res) => res.render('home'));
app.use(authRoutes);

startServer();

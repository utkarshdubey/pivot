const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Initializing Dotenv 

require('dotenv').config();

// Database Connection
const db = require('./db');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose.connect(db.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .catch(err => console.log(err));

// Body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Static Folder Config
app.use(express.static(path.join(__dirname, 'public')));

// Method override middleware
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.json({
        status: '🍕✨the server works.🎊🌭'
    });
})

// Routes
const changelog = require('./routes/changelog');
app.use('/changelog', changelog);

app.listen(port, () => {
    console.log(`\n \n 🧠 The server has started in the ${process.env.DEVELOPMENT ? "development" : "production" } mode. \n You can access the application at ${process.env.DEVELOPMENT ? "http://localhost:5000 or 127.0.0.1:5000." : "your URL or 0.0.0.0"}.`);
})
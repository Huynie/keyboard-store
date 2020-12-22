const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config')

const app = express();

//Bodyparser middleware
app.use(express.json());
// Middleware pointing to folder that server should serve at root route
// app.use('/', express.static(path.join(__dirname, "client", "build")));

//DB Config
const db = config.get('mongoURI');

//Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Keybz MongoDB Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items', require('./routes/api/items'));
// app.use('/api/users', require('./routes/api/users'));

// Serve Static assets if in production
if (process.env.NODE_ENV === 'production') {

    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started On Port ${port}`));
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const userRoute = require('./routes/userRoute');
const cors = require('cors');

const port = process.env.PORT || 5001;

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to database!'))

const app = express();
app.use(bodyparser.json());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

app.use("/api/users", userRoute);

app.listen(port, () => { console.log("Sever started at http://localhost:5001") });
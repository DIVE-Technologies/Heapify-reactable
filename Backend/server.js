const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const userRoute = require('./routes/userRoute');
const contactUsRoute = require('./routes/ContactUs');
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.PORT || 5001;

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to database!'))

const app = express();
app.use(morgan('tiny'));
app.use(bodyparser.json());

// allow cors requests from any origin and with credentials
app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  
    next();
});
// app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

app.use("/api/users", userRoute);
app.use("/query", contactUsRoute);

app.listen(port, () => { console.log("Sever started at http://localhost:5001") });
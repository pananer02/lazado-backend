require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://lazade:12345@cluster0.4ejcl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
app.use(cors());
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const studentAPI = require('./routes/username.route');
const skateboardAPI = require('./routes/skateboard.route');
const historyAPI = require('./routes/history.route');
app.use('/apiUser', studentAPI);
app.use('/apiSB', skateboardAPI);
app.use('/apiHistory', historyAPI);

app.listen(3000, () => console.log('Server Started'))
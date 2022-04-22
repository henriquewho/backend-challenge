const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
const mongoose = require('mongoose');

const config = require('./utils/config')

mongoose.connect(config.MONGODB_URI)
.then(()=>{
    console.log('connected to MongoDB on ', config.MONGODB_URI);
})
.catch( err => {
    console.log('error connecting: ', err.message);
})

app.use(cors());
app.use(express.json());

app.get('/testenv', (req, res)=>{
    res.end(`TEST! -> ${process.env.NODE_ENV}`);
})

module.exports = app; 
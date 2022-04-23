const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
const mongoose = require('mongoose');

const config = require('./utils/config')
const datesRouter = require('./routes/dates');
const casesRouter = require('./routes/cases');
const middleware = require('./utils/middleware');

mongoose.connect(config.MONGODB_URI)
.then(()=>{
    console.log('connected to MongoDB on ', config.MONGODB_URI);
})
.catch( err => {
    console.log('error connecting: ', err.message);
})

app.use(cors());
app.use(express.json());

app.use('/dates', datesRouter); 
app.use('/cases', casesRouter); 

app.get('/', (req, res)=>{
    res.send(`Backend Challenge 2021 🏅- Covid Daily Cases`);
})

app.use(middleware.unknownEndpoint);

module.exports = app; 
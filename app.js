const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
const mongoose = require('mongoose');

const config = require('./utils/config')
const datesRouter = require('./routes/dates');
const casesRouter = require('./routes/cases');
const middleware = require('./utils/middleware');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

mongoose.connect(config.MONGODB_URI)
.then(()=>{
    console.log('connected to MongoDB successfully');
})
.catch( err => {
    console.log('error connecting: ', err.message);
})

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'COVID cases REST API', 
            desription: 'REST API that returns information about COVID CASES, for the Coodesh Backend Challenge', 
            contact: {
                name: 'Geraldo Henrique G. Fonseca'
            }, 
            servers: ["http://localhost:3003"]
        }
    }, 
    apis: ["./routes/*.js"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors());
app.use(express.json());

app.use('/dates', datesRouter); 
app.use('/cases', casesRouter); 

app.get('/', (req, res)=>{
    res.send(`Backend Challenge 2021 🏅- Covid Daily Cases`);
})

app.use(middleware.unknownEndpoint);

module.exports = app; 
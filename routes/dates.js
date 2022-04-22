const datesRouter = require('express').Router();  
const {getDates} = require('../controllers/dates'); 

datesRouter.get('/', getDates);

module.exports = datesRouter; 
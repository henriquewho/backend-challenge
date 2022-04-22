const datesRouter = require('express').Router();  
const {getDates, getAllDates, getDates2} = require('../controllers/dates'); 

datesRouter.get('/', getDates);

module.exports = datesRouter; 
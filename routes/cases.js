const casesRouter = require('express').Router(); 
const {getCasesByDay, getCumulativeCases} = require('../controllers/cases'); 

casesRouter.get('/:date/counter', getCasesByDay); 
casesRouter.get('/:date/cumulative', getCumulativeCases); 

module.exports = casesRouter; 
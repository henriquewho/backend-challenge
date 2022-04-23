const casesRouter = require('express').Router();
const {getCasesByDay, getCumulativeCases} = require('../controllers/cases');
const middleware = require('../utils/middleware');

casesRouter.get('/:date/counter', middleware.checkDate, getCasesByDay);
casesRouter.get('/:date/cumulative', middleware.checkDate, getCumulativeCases);

module.exports = casesRouter;
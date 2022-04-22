const Entry = require('../models/entry');

const getCasesByDay = (req, res) => {
    const date = req.params.date; 
    console.log(date); 
    res.end('getCasesByDay')
}

const getCumulativeCases = (req, res) => {
    const date = req.params.date; 
    console.log(date); 
    res.end('getCumulativeCases')
}

module.exports = {
    getCumulativeCases, getCasesByDay
}
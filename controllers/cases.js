const Entry = require('../models/entry');

const getCasesByDay = (req, res) => {
    res.end(`date: ${req.date}`)
}

const getCumulativeCases = (req, res) => {
    const date = req.params.date; 
    console.log(date); 
    res.end('getCumulativeCases')
}

module.exports = {
    getCumulativeCases, getCasesByDay
}
const Entry = require('../models/entry');
const mongoose = require('mongoose'); 

const getDates = async (req, res) => {
    let entries = await Entry.find({}); 
    return res.end(`Number of entries: ${entries.length}` ); 
}

module.exports = {
    getDates
}
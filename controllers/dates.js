const Entry = require('../models/entry');

const getDates = async (req, res) => {
    try {
        const  distinctDates = await Entry.distinct('date');
        return res.status(200).json({
            success: true, data: distinctDates
        })
    } catch (err) {
        console.log(`error while getDates: ${err}`); 
        return res.json({
            success: false, msg: `Error while querying for distinct dates`
        })
    }
    
}

module.exports = {
    getDates
}
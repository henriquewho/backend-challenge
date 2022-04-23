const Entry = require('../models/entry');

const getDates = async (req, res) => {
    try {
        const  distinctDates = await Entry.distinct('date');
        return res.status(200).json({
            success: true, data: distinctDates
        })
    } catch (err) {
        return res.status(500).json({
            success: false, msg: `Error while querying for distinct dates`, err
        })
    }
}

module.exports = {
    getDates
}
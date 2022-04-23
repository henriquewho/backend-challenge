const Entry = require('../models/entry');

const getCasesByDay = async (req, res) => {
    const filter = {date: new Date(req.date)}; 

    try {
        const entries = await Entry.aggregate()
        .match(filter)
        .group({"_id": {
            "location": "$location", 
            "variant": "$variant", 
            "num_sequences": "$num_sequences"
        }})
        .group({
            "_id": "$_id.location", 
            "variants": {
                "$push": {
                        "variant": "$_id.variant", "total": "$_id.num_sequences"
                }
            }
        })
    
        return res.status(200).json({
            success: true, data: entries
        })

    } catch (err) {
        return res.status(500).json({
            success: false, msg: `Error while querying for cases in the date ${req.date}`, err
        })
    }


}

const getCumulativeCases = async (req, res) => {
    const nextDate = new Date(req.date);
    nextDate.setDate(nextDate.getDate()+1); 
    const filter = {"date": {"$gte": new Date(2019, 0, 1), "$lt": nextDate}};

    try {
        const entries = await Entry.aggregate()
        .match(filter)
        .group(
            {"_id": 
            {
                "location": "$location", 
                "variant": "$variant"
            }, 
            count: {
                "$sum": "$num_sequences"
            }
        })
        .group({
            "_id": "$_id.location", 
            "variants": {
                "$push": {
                    "variant": "$_id.variant", 
                    "total": "$count"
                }
            }
        })

        return res.status(200).json({
            success: true, data: entries
        })

    } catch(err) {
        return res.status(500).json({
            success: false, msg: `Error while querying for cumulative cases in the date ${req.date}`, err
        })
    }
}

module.exports = {
    getCumulativeCases, getCasesByDay
}
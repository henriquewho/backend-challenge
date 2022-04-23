/* 
GET]/cases/:date/count: Listar todos os registros da base de dados no dia selecionado, agrupados por país e separados por variante.

[GET]/cases/:date/cumulative: Listar todos os registros da base de dados, retornando a soma dos casos registrados de acordo com a data selecionada, agrupados por país e separados por variante.
*/

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
                        "variant": "$_id.variant", "num": "$_id.num_sequences"
                }
            }
        })
    
        return res.status(200).json({
            success: true, data: entries
        })

    } catch (err) {
        return res.status(500).json({
            success: false, msg: `Error while querying for cases in the date`, err
        })
    }


}

const getCumulativeCases = (req, res) => {
    const date = req.params.date; 
    console.log(date); 
    res.end('getCumulativeCases')
}

module.exports = {
    getCumulativeCases, getCasesByDay
}
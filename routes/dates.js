/* 
[GET]/dates: Listar as datas disponíveis no dataset
*/

const datesRouter = require('express').Router(); 
const Entry = require('../models/entry'); 

// test the api
datesRouter.get('/test', (req, res)=>{
    res.send(`Testing the dates router`); 
})

module.exports = datesRouter; 
/* 
[GET]/dates: Listar as datas disponíveis no dataset
*/
const datesRouter = require('express').Router();  
const {getDates} = require('../controllers/dates'); 

// test the api
datesRouter.get('/test', (req, res)=>{
    res.send(`Testing the dates router`); 
})

datesRouter.get('/', getDates);

module.exports = datesRouter; 
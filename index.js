const express = require('express'); 
const app = express(); 

app.get('/', (req, res)=>{
    res.end(`TESTs -> ${process.env.NODE_ENV}`);
})

const PORT = process.env.PORT || 3003; 
app.listen(PORT, ()=>{
    console.log(`Listening at ${PORT}`);
})
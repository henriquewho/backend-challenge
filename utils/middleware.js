const checkDate = (req, res, next) => {
    const reg = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g    
    const reg2 = /[0-9]{4}[0-9]{2}[0-9]{2}/g    
    const date = req.params.date; 

    if (date.search(reg)!==-1){
        req.date = date; 
        next(); 
    } else if (date.search(reg2)!==-1){
        const newDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6,8)}`; 
        req.date = newDate; 
        next(); 
    }
    else {
        return res.status(400).json({
            success: false, msg: `The date parameter ${date} is invalid, please try again`
        })
    }
}

module.exports = {
    checkDate
}
/* 
The middleware checkDate will check if the date provided in the url as cases/:date/... is 
valid. The two validations are: 
a) format, which should be YYYY-MM-DD or YYYYMMDD
b) range for month or day, as searching with month=13 / day=32 won't return valida data from 
the database
*/

const checkBounds = (month, day, res, date) => {
    return (+month > 12 || +day > 31 || +month==0 || +day===0) ? 'invalid' : 'valid'; 
}

const checkDate = (req, res, next) => {
    const reg = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g    
    const reg2 = /[0-9]{4}[0-9]{2}[0-9]{2}/g    
    const date = req.params.date; 

    if (date.search(reg)!==-1){
        if (checkBounds(date.slice(5, 7), date.slice(8,10), res, date) === 'valid') {
            req.date = date; 
        } else {
            return res.status(400).json({
                success: false, msg: `The date parameter ${date} is invalid, please try again. The month should be between 1 and 12 and the day between 1 and 31.`
            })
        }
        next(); 
    } else if (date.search(reg2)!==-1){
        if (checkBounds(date.slice(4, 6), date.slice(6,8), res, date) === 'valid') {
            const newDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6,8)}`; 
            req.date = newDate; 
        } else {
            return res.status(400).json({
                success: false, msg: `The date parameter ${date} is invalid, please try again. The month should be between 1 and 12 and the day between 1 and 31.`
            })
        }
        next(); 
    }
    else {
        return res.status(400).json({
            success: false, msg: `The date parameter ${date} is invalid, please try again. The date should be provided as YYYY-MM-DD or YYYYMMDD`
        })
    }
}

module.exports = {
    checkDate
}
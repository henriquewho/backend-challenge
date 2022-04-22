const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    location: { type: String }, 
    date: { type: Date }, 
    variant: { type: String }, 
    num_sequences: { type: Number }, 
    perc_sequences: { type: Number }, 
    num_sequences_total: { type: Number }
})

entrySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id 
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Entry', itemSchema)
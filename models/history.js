const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let historySchema = new Schema({
    name: {
        type: String
    },
    gen: {
        type: String
    },
    baht: {
        type: Number
    },
    nameBuy:{
        type: String
    },
    address:{
        type: String
    },
    pay:{
        type: String
    },
    Date:{
        type: Date
    }
}, {
    collection: 'history'
})

module.exports = mongoose.model('history', historySchema);
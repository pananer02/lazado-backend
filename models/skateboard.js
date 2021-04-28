const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let skateboardSchema = new Schema({
    name: {
        type: String
    },
    gen: {
        type: String
    },
    img:{
        type: String
    },
    baht: {
        type: Number
    },
    status:{
        type: String
    },
    amount:{
        type: Number
    }
}, {
    collection: 'skateboard'
})

module.exports = mongoose.model('skateboard', skateboardSchema);
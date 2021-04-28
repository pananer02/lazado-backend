const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usernameSchema = new Schema({
    name: {
        type: String
    },
    id: {
        type: String
    },
    tel: {
        type: Number
    }
}, {
    collection: 'username'
})

module.exports = mongoose.model('username', usernameSchema);
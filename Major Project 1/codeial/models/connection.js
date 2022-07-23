const mongoose = require('mongoose');
const connSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

const Connection = mongoose.model('Connection', connSchema);
module.exports = Connection;
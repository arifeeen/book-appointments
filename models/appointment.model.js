const mongoose = require('mongoose');
const appointment = mongoose.model('appointment', {
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required:true
    }
});

module.exports = appointment;
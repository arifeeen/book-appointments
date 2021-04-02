const mongoose = require('mongoose');
const appointment = mongoose.model('appointment', {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
    },
    time: {
        type: String,
        required: true
    }
});

module.exports = appointment;
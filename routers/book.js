const express = require('express');
const router = express.Router()


const bookModel = require('../models/appointment.model');

router.get('/appointments', async (req, res) => {
    let allAppointments;
    try { 
        allAppointments = await bookModel.find({}) 
    } catch(e) {
        return res.status(500).send(e);
    }
    

    return res.status(200).send(allAppointments);
});


router.post('/book', (req, res) => {
    console.log(req.body);
    const bookObj = new bookModel({
        ...req.body
    });
    bookObj.save().then((result) => {

        return res.status(200).send(result);
    }).catch((e) => {

        return res.status(500).send(e);
    })

})







module.exports = router;
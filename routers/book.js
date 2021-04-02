const express = require('express');
const router = express.Router()


const bookModel = require('../models/appointment.model');

router.get('/appointments', async (req, res) => {
    let allAppointments;
    let date = req.query.date;
    console.log('date',date);
    try { 
        allAppointments = await bookModel.find({date}) 
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

router.put('/updateAppointment',  (req,res) => {
    const updateObj = req.body;
    const filter = req.body._id;
    const opts = {new: true};

     bookModel.findByIdAndUpdate(filter, updateObj,opts).then(result => {
        return res.status(200).send(result);
    }).catch(e => {
        return res.status(500).send(e);
    })
})







module.exports = router;
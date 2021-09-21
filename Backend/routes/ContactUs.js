const express = require('express');
const ContactUsModel = require('../Model/ContactUsModel');

const router = express.Router();

router.post('/contactUs', async (req, res) => {
    const { name, email, message } = req.body;

    if(!name || !email || !message) {
        res.status(400).send({
            message: "Some data is missing."
        })
    }

    const info = new ContactUsModel({ name, email, message });
    const data = await info.save();
    if(data) {
        res.status(200).send({
            message: "✅ Thank you for contacting Heapify. We will get back to you soon!!"
        })
    } else {
        res.status(400).send({
            message: "Something went wrong. Please try again!!"
        })
    }
})

module.exports = router;
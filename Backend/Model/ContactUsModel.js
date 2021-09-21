const mongoose = require('mongoose');

const options = {
    timestamps: {
        createdAt: 'created_at'
    }
}

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, options);

const ContactUsModel = mongoose.model("contactUs", contactUsSchema);
module.exports = ContactUsModel;
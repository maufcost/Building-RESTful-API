const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    company: { type: String },
    phone: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model("Contact", ContactSchema);

/*
Alternative to { timestamps: true }:

created_date: {
    type: Date,
    default: Date.now
}
*/

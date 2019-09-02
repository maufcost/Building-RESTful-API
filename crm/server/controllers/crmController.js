// 'controller' ~ service.
const mongoose = require("mongoose");
const ContactModel = require("../models/crmModel.js");

const addNewContact = (request, response) => {
    let newContact = new ContactModel(request.body);
    newContact.save((error, contact) => {
        if (error) {
            response.send(error);
        }else {
            response.json(contact);
        }
    });
};

const getAllContacts = (request, response) => {
    ContactModel.find({}, (error, contact) => {
        if (error) {
            response.send(error);
        }else {
            response.json(contact);
        }
    });
}

const getContactWithId = (request, response) => {
    ContactModel.findById(request.params.contactId, (error, contact) => {
        if (error) {
            response.send(error);
        }else {
            response.json(contact);
        }
    });
};

const updateContact = (request, response) => {
    // { new: true } so that I get the updated object as a result in the 'contact' obj.
    // and not the old one.
    ContactModel.findOneAndUpdate({ _id: request.params.contactId,
                                    request.body, { new: true } }, (error, contact) => {
                                        if (error) {
                                            response.send(error);
                                        }else {
                                            response.json(contact);
                                        }
                                    });
};

const deleteContact = (request, response) => {
    ContactModel.remove({ _id: request.params.contactId }, (error, contact) => {
        if(error) {
            response.send(error);
        }else {
            response.json({ message: "Successfully deleted." });
        }
    })
};

module.exports = {
    addNewContact, getAllContacts, getContactWithId, updateContact, deleteContact
};

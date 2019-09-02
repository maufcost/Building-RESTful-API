const express = require("express");
const contactController = require("../controllers/crmController.js")


module.exports = () => {
    const router = express.Router();

    // GET endpoints.
    router.get("/contact", contactController.getAllContacts);
    router.get("/contact/:contactId", contactController.getContactWithId);

    // POST endpoints.
    router.post("/contact", contactController.addNewContact);

    // PUT endpoints.
    router.put("/contact/:contactId", contactController.updateContact);

    // DELETE endpoints.
    router.delete("/contact/:contactId", contactController.deleteContact);

    // router.get("/contact", (request, response, next) => {
    //     return response.send("GET request successful.");
    // });

    // router.post("/contact", (request, response) => {
    //     return response.send("POST request successful.");
    // });

    // router.put((request, response) => {
    //     return response.send("PUT request successful.");
    // });

    // router.delete((request, response) => {
    //     return response.send("DELETE request successful.");
    // });

    return router;
};

// Middlewares are simply functions that have access to request and response
// objects and can alter them however they would like to.

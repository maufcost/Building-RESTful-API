const express = require("express");
const bodyParser = require("body-parser");

module.exports = () => {
    const app = express();

    // Setting up body parser to parse POST data to JSON.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // Setting up routes.
    const routes = require("./routes/crmRoutes.js");
    app.use(express.static("public"));
    app.use("/", routes());

    return app;
};

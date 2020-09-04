const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const routes = require("./api");
const { notFound, errorHandler } = require("./middlewares");

const app = express();

require("./helpers/dbConnection");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("tiny"));

// register the routes
app.use("/api", routes);

// error handlers
app.use(notFound);
app.use(errorHandler);

module.exports = app;

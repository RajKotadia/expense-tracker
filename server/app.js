const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const routes = require("./api");
const { checkTokenSetUser, notFound, errorHandler } = require("./middlewares");

const app = express();

require("./helpers/dbConnection");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("tiny"));

// token verification middleware
app.use(checkTokenSetUser);

// register the routes
app.use("/api", routes);

// serve static assets if in production
if (true) {
	const staticPath = path.resolve(__dirname, "../", "client/dist");

	app.use(express.static("client/dist"));
	app.get("*", (_, res) => {
		res.sendFile(path.resolve(staticPath, "index.html"));
	});
}

// error handlers
app.use(notFound);
app.use(errorHandler);

module.exports = app;

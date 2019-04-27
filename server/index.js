const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config
const mongoose = require("mongoose");

// Configure DB
const db = require("../config/keys").mongoURI;

nextApp.prepare().then(() => {
	// express code here
	const app = express();
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use("/api/photos", require("./routes/apiroutes"));
	app.get("*", (req, res) => {
		return handle(req, res); // next should handle all other routes except the ones specified.
	});
	app.listen(PORT, err => {
		if (err) throw err;
		console.log(`ready at http://localhost:${PORT}`);
	});
});

const express = require("express");

require("dotenv").config();

const connect = require("./configs/db");

const app = express();
app.use(express.json());

const start = async () => {
	await connect();
	app.listen(process.env.SERVER_PORT, () => {
		console.log("Hurray! listening to port no", process.env.SERVER_PORT);
	});
};

module.exports = start;

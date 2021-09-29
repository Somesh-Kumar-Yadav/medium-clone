const express = require("express");
const cors = require("cors");
const userController = require("./controllers/user.controller");
const topicsController = require("./controllers/topics.controller");

require("dotenv").config();

const connect = require("./configs/db");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userController);
app.use("/topics", topicsController);
const start = async () => {
	await connect();
	app.listen(process.env.SERVER_PORT, () => {
		console.log("Hurray! listening to port no", process.env.SERVER_PORT);
	});
};

module.exports = start;

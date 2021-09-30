const express = require("express");
const { urlencoded, json } = require("body-parser");
const { cloudinaryConfig } = require("./configs/cloudinaryConfig");
const cors = require("cors");
const userController = require("./controllers/user.controller");
const topicsController = require("./controllers/topics.controller");
const blogsController = require("./controllers/blog.controller");
const routeController = require("./routes/routes");
const connect = require("./configs/db");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use("*", cloudinaryConfig);

app.use("/users", userController);
app.use("/topics", topicsController);
app.use("/blogs", blogsController);
app.use("/", routeController);

const port = process.env.SERVER_PORT || "2345";

const start = async () => {
	await connect();
	app.listen(port, () => {
		console.log("Hurray! listening to port no", port);
	});
};

module.exports = start;

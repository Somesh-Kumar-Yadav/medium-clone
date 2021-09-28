const mongoose = require("mongoose");

const connect = () => {
	return mongoose.connect("mongodb://localhost:27017/sprint", {
		useCreateIndex: true,
		useFindAndModify: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};

module.exports = connect;

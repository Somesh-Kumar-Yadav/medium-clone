const mongoose = require("mongoose");

const connect = () => {
	return mongoose.connect("mongodb://localhost:27017/medium", {
		useCreateIndex: true,
		useFindAndModify: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};

module.exports = connect;

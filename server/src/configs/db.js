const mongoose = require("mongoose");

const connect = () => {
	//LOCALHOST=>  mongodb://localhost:27017/medium
	//ATLAS=>  mongodb+srv://medium:medium@cluster0.vpk1n.mongodb.net/mediumClone?retryWrites=true&w=majority
	return mongoose.connect("mongodb://localhost:27017/sprint", {
		useCreateIndex: true,
		useFindAndModify: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};

module.exports = connect;

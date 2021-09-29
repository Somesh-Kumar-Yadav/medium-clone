const mongoose = require("mongoose");

let TopicSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = mongoose.model("Topic", TopicSchema);

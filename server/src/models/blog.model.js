const mongoose = require("mongoose");

let BlogSchema = new mongoose.Schema(
	{
		text: { type: String, required: true },
		title: { type: String, required: true },
		description: { type: String, required: true },
		featureImg: { type: String, required: true },
		claps: { type: Number, required: true },
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		topic: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Topic",
		},
		comments: [
			{
				author: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
				},
				text: String,
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = mongoose.model("Blog", BlogSchema);

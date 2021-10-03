const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		familyName: { type: String, required: true },
		givenName: { type: String, required: true },
		imageUrl: { type: String, required: true },
		followers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		following: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		followingTopics: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Topic",
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = mongoose.model("User", UserSchema);

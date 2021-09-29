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
UserSchema.methods.follow = function (userId) {
	if (this.following.indexOf(userId) === -1) {
		this.following.push(userId);
	}
	return this.save();
};
UserSchema.methods.topics = function (topicId) {
	if (this.followingTopics.indexOf(topicId) === -1) {
		this.followingTopics.push(topicId);
	}
	return this.save();
};
UserSchema.methods.addFollower = function (fs) {
	this.followers.push(fs);
};
module.exports = mongoose.model("User", UserSchema);

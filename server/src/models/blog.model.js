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
BlogSchema.methods.clap = function () {
	this.claps++;
	return this.save();
};
BlogSchema.methods.comment = function (c) {
	this.comments.push(c);
	return this.save();
};
BlogSchema.methods.addAuthor = function (authorId) {
	this.author = authorId;
	return this.save();
};
BlogSchema.methods.getUserArticle = function (_id) {
	Blog.find({ author: _id }).then((blog) => {
		return blog;
	});
};
module.exports = mongoose.model("Blog", BlogSchema);

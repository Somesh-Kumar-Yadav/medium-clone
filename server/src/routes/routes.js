const express = require("express");
const User = require("../models/user.model");
const Blog = require("../models/blog.model");
const router = express.Router();

router.post("/:id/follow/:followingid", async (req, res) => {
	let user;
	let following;
	try {
		user = await User.findById(req.params.id).lean().exec();
		following = await User.findById(req.params.followingid).lean().exec();
		if (user.following.indexOf(req.params.followingid) === -1) {
			const followingList = [...user.following, req.params.followingid];
			user = await User.findByIdAndUpdate(req.params.id, {
				following: followingList,
			});
		}
		if (following.followers.indexOf(req.params.id) === -1) {
			const followerList = [...user.followers, req.params.id];
			following = await User.findByIdAndUpdate(req.params.followingid, {
				followers: followerList,
			});
		}
		res.status(200).send({ status: "success", message: "Added Follower" });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});

router.post("/:id/topic/:topicid", async (req, res) => {
	let user;
	try {
		user = await User.findById(req.params.id).lean().exec();
		if (user.followingTopics.indexOf(req.params.topicid) === -1) {
			const topicList = [...user.followingTopics, req.params.topicid];
			user = await User.findByIdAndUpdate(req.params.id, {
				followingTopics: topicList,
			});
		}
		res.status(200).send({ status: "success", message: "Added Topics" });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.post("/:blogid/blog/clap", async (req, res) => {
	let blog;
	try {
		blog = await Blog.findById(req.params.blogid).lean().exec();
		const clap = blog.clap;
		blog = await Blog.findByIdAnyUpdate(req.params.blogid, {
			clap: clap + 1,
		});
		res.status(200).send({ status: "success", message: "Clapped" });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.post("/:blogid/comment", async (req, res) => {
	let blog;
	try {
		blog = await Blog.findById(req.params.blogid).lean().exec();
		const commentList = [...blog.comment, req.body];
		blog = await Blog.findByIdAndUpdate(req.params.blogid, {
			comments: commentList,
		});
		res.status(200).send({ status: "success", message: "commented" });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});

module.exports = router;

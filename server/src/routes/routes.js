const express = require("express");
const User = require("../models/user.model");
const Blog = require("../models/blog.model");
const Topic = require("../models/topics.model");
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
		user = await User.findById(req.params.id)
			.populate("followers")
			.populate("followingTopics")
			.populate("following")
			.lean()
			.exec();
		const str = user.followingTopics.map((item) => {
			return item.title;
		});
		const topic = await Topic.findById(req.params.topicid).lean().exec();
		if (!str.includes(topic.title)) {
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
router.post("/:blogid/comment", async (req, res) => {
	let blog;
	try {
		blog = await Blog.findById(req.params.blogid).lean().exec();
		console.log(blog);
		const commentList = [...blog.comment, req.body];
		console.log(commentLists);
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
router.get("/trending", async (req, res) => {
	let trending;
	try {
		trending = await Blog.find()
			.sort({ claps: -1 })
			.populate("author")
			.populate("topic")
			.populate("comments.author")
			.limit(6)
			.lean()
			.exec();
		res.status(200).send({ trending });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.get("/:id/topics", async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
			.populate("followers")
			.populate("followingTopics")
			.populate("following")
			.lean()
			.exec();
		const topics = user.followingTopics;
		res.status(200).send({ topics });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.get("/:id/nottopics", async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
			.populate("followers")
			.populate("followingTopics")
			.populate("following")
			.lean()
			.exec();
		const allTopics = await Topic.find().lean().exec();
		const topics = user.followingTopics.map((item) => item.title);
		const topic = allTopics.filter((item) => {
			return !topics.includes(item.title);
		});
		const data = topic.slice(0, 9);
		res.status(200).send({ data });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.get("/:id/notfollow", async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
			.populate("followers")
			.populate("followingTopics")
			.populate("following")
			.lean()
			.exec();
		const allUser = await User.find()
			.populate("followers")
			.populate("followingTopics")
			.populate("following")
			.lean()
			.exec();
		const peoples = user.following;
		let ids = peoples.map((item) => {
			return item.name;
		});
		ids = [...ids, user.name];
		const people = allUser.filter((item) => {
			return !ids.includes(item.name);
		});
		const data = people.slice(0, 3);
		res.status(200).send({ data });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});

router.get("/:id/followingblogs", async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
			.populate("followers")
			.populate("followingTopics")
			.populate("following")
			.lean()
			.exec();
		const allBlogs = await Blog.find()
			.populate("author")
			.populate("topic")
			.populate("comments.author")
			.lean()
			.exec();
		const following = user.following.map((item) => {
			return item.name;
		});
		const data = allBlogs.filter((item) => {
			return following.includes(item.author.name);
		});
		res.status(200).send({ data });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.post("/topicsblog", async (req, res) => {
	try {
		const topic = req.body.topic;
		const allBlogs = await Blog.find()
			.populate("author")
			.populate("topic")
			.populate("comments.author")
			.lean()
			.exec();
		const data = allBlogs.filter((item) => {
			return item.topic.title === topic;
		});
		res.status(201).send({ data });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
module.exports = router;

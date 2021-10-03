const express = require("express");
const { multerUploads } = require("../middlewares/multer");
const upload = require("../middlewares/upload");
const Blog = require("../models/blog.model");
const Topic = require("../models/topics.model");
const router = express.Router();

router.post("/", multerUploads, upload, async (req, res) => {
	let blog;
	let topic;
	try {
		topic = await Topic.findOne({ title: req.body.topic }).lean().exec();
		if (!topic) {
			topic = await Topic.create({
				title: req.body.topic ? req.body.topic : undefined,
			});
		}
		blog = await Blog.create({
			text: req.body.text,
			title: req.body.title,
			description: req.body.description,
			featureImg: req.image,
			claps: 0,
			author: req.body.author,
			comments: [],
			topic: topic._id,
		});
		return res.status(201).json({ blog });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.get("/", async (req, res) => {
	let blogs;
	try {
		blogs = await Blog.find()
			.populate("author")
			.populate("topic")
			.populate("comments.author")
			.lean()
			.exec();

		return res.status(200).json({ blogs });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.get("/:id", async (req, res) => {
	try {
		const blog = await Blog.findById(req.params.id)
			.populate("author")
			.populate("topic")
			.populate("comments.author")
			.lean()
			.exec();
		return res.status(200).json({ blog });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.patch("/:id", async (req, res) => {
	console.log(req.body);
	try {
		const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		return res.status(200).json({ blog });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.delete("/:id", async (req, res) => {
	try {
		const blog = await Blog.findByIdAndDelete(req.params.id);
		return res.status(200).json({ blog });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
module.exports = router;

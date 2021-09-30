const express = require("express");
const { multerUploads } = require("../middlewares/multer");
const upload = require("../middlewares/upload");
const Blog = require("../models/blog.model");
const router = express.Router();

router.post("/", multerUploads, upload, async (req, res) => {
	let blog;
	try {
		blog = await Blog.create({
			text: req.body.text,
			title: req.body.title,
			description: req.body.description,
			featureImg: req.image,
			claps: 0,
			author: req.body.author,
			comments: [],
			topic: req.body.topic ? req.body.topic : undefined,
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
		blogs = await Blog.find().lean().exec();

		return res.status(200).json({ blogs });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});

module.exports = router;

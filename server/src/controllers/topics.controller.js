const express = require("express");

const Topic = require("../models/topics.model");

const router = express.Router();

router.post("/", async (req, res) => {
	let topic;
	try {
		topic = await Topic.findOne({ title: req.body.title }).lean().exec();
		if (!topic) {
			topic = await Topic.create({
				title: req.body.title,
			});
		}
		return res.status(201).json({ topic });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.get("/", async (req, res) => {
	let topics;
	try {
		topics = await Topic.find().lean().exec();

		return res.status(200).json({ topics });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});

module.exports = router;

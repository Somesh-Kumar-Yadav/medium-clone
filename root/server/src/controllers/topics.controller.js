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
		topics = await Topic.find().limit(9).lean().exec();
		return res.status(200).json({ topics });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.get("/:id", async (req, res) => {
	try {
		const topic = await Topic.findById(req.params.id).lean().exec();
		return res.status(200).json({ topic });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.patch("/:id", async (req, res) => {
	try {
		const topic = await Topic.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		return res.status(200).json({ topic });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.delete("/:id", async (req, res) => {
	try {
		const topic = await Topic.findByIdAndDelete(req.params.id);
		return res.status(200).json({ topic });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
module.exports = router;

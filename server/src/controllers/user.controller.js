const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

router.post("/", async (req, res) => {
	let user;
	try {
		user = await User.findOne({ email: req.body.email }).lean().exec();
		if (!user) {
			user = await User.create({
				name: req.body.name,
				email: req.body.email,
				description: req.body.familyName,
				givenName: req.body.givenName,
				imageUrl: req.body.imageUrl,
				followers: [],
				following: [],
				followingTopics: [],
			});
		}
		return res.status(201).json({ user });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.get("/", async (req, res) => {
	let users;
	try {
		users = await User.find().lean().exec();

		return res.status(200).json({ users });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.get("/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id).lean().exec();
		return res.status(200).json({ user });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.patch("/:id", async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		return res.status(200).json({ user });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.delete("/:id", async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		return res.status(200).json({ user });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
module.exports = router;

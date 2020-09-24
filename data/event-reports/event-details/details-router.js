const express = require("express");

const Details = require("./details-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const details = await Details.findDetails();
        res.json(details);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const details = await Details.findDetailsBy(req.params.id);

        res.json(details);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const { event_id, event_image_url, description } = req.body;
        const payload = {
            event_id: event_id,
            description: description,
            event_image_url: event_image_url
        };

        const detail = await Details.addDetails(payload);
        res.json({ message: `Event ${detail} added!` });
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const change = await Details.update(req.params.id, req.body);
        res.status(201).json(change);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        await Details.remove(req.params.id);
        res.status(204).json({ message: "The details were removed!" });
    } catch (err) {
        next(err);
    }
});

module.exports = router;

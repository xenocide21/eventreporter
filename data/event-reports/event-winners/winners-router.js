const express = require("express");

const Winners = require("./winners-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const winners = await Winners.findWinners();
        res.json(winners);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const winner = await Winners.findWinnersBy(req.params.id);

        res.json(winner);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const {
            event_id,
            event_winner1,
            event_winner2,
            event_winner3,
            event_winner4,
            event_winner5,
            event_winner6,
            event_winner7,
            event_winner8,
            event_winner9,
            event_winner10,
            event_winner11,
            event_winner12,
            event_winner13,
            event_winner14,
            event_winner15,
            event_winner16,
            event_winner17,
            event_winner18,
            event_winner19,
            event_winner20,
        } = req.body;
        const payload = {
            event_id: event_id,
            event_winner1: event_winner1,
            event_winner2: event_winner2,
            event_winner3: event_winner3,
            event_winner4: event_winner4,
            event_winner5: event_winner5,
            event_winner6: event_winner6,
            event_winner7: event_winner7,
            event_winner8: event_winner8,
            event_winner9: event_winner9,
            event_winner10: event_winner10,
            event_winner11: event_winner11,
            event_winner12: event_winner12,
            event_winner13: event_winner13,
            event_winner14: event_winner14,
            event_winner15: event_winner15,
            event_winner16: event_winner16,
            event_winner17: event_winner17,
            event_winner18: event_winner18,
            event_winner19: event_winner19,
            event_winner20: event_winner20,
        };
        const winner = await Winners.addWinners(payload);
        res.json({ message: `The winners ${winner} were added!` });
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const change = await Winners.update(req.params.id, req.body);
        res.status(201).json(change);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        await Winners.remove(req.params.id);
        res.status(204).json({ message: "The winner were removed!" });
    } catch (err) {
        next(err);
    }
});

module.exports = router;

const express = require("express");

const Rewards = require("./rewards-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const rewards = await Rewards.findRewards();
        res.json(rewards);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const rewards = await Rewards.findRewardsBy(req.params.id);

        res.json(rewards);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const {
            event_id,
            event_reward1,
            event_reward2,
            event_reward3,
            event_reward4,
            event_reward5,
            event_reward6,
            event_reward7,
            event_reward8
        } = req.body;
        const payload = {
            event_id: event_id,
            event_reward1: event_reward1,
            event_reward2: event_reward2,
            event_reward3: event_reward3,
            event_reward4: event_reward4,
            event_reward5: event_reward5,
            event_reward6: event_reward6,
            event_reward7: event_reward7,
            event_reward8: event_reward8,
        };
        const reward = await Rewards.addRewards(payload);
        res.json({ message: `Event ${reward} added!` });
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const change = await Rewards.update(req.params.id, req.body);
        res.status(201).json(change);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        await Rewards.remove(req.params.id);
        res.status(204).json({ message: "The rewards were removed!" });
    } catch (err) {
        next(err);
    }
});

module.exports = router;

const express = require("express");

const events = require("./event-model.js");
const details = require('./event-details/details-model');
const rewards = require('./event-rewards/rewards-model');
const winners = require('./event-winners/winners-model');
const detailsRouter = require('./event-details/details-router')
const rewardsRouter = require('./event-rewards/rewards-router')
const winnersRouter = require('./event-winners/winners-router')

const router = express.Router();

router.use('/details', detailsRouter)
router.use('/rewards', rewardsRouter)
router.use('/winners', winnersRouter)

// Event Routing

router.get("/", async (req, res, next) => {
    try {
        const event = await events.find();
        res.json(event);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const event = await events.findById(req.params.id);
        if (!event) {
            return res.status(404).json({
                message: "No event is found.",
            });
        }
        console.log(req.params.id);
        res.json(event);
    } catch (err) {
        next(err);
    }
});

router.post("/", (req, res) => {
    const newEvent = req.body;

    events.add(newEvent)
        .then((event) => {
            res.status(201).json(event);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to create new event" });
        });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    events.findById(id)
        .then((event) => {
            if (event) {
                events.update(changes, id).then((updatedEvent) => {
                    res.json(updatedEvent);
                });
            } else {
                res
                    .status(404)
                    .json({ message: "Could not find event with given id" });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to update event" });
        });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    events.remove(id)
        .then((deleted) => {
            if (deleted) {
                res.json({ removed: deleted });
            } else {
                res
                    .status(404)
                    .json({ message: "Could not find event with given id" });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to delete event" });
        });
});

// Details Routing

router.get("/:id/details", async (req, res, next) => {
    try {
        const id = req.params.id
        const details = await details.findDetailsByEvent(id)
        console.log(req.params.id);
        console.log(details)
        res.json(details)
    } catch (err) {
        next(err);
    }
});

// Rewards Routing

router.get("/:id/rewards", async (req, res, next) => {
    try {
        const id = req.params.id
        const rewards = await rewards.findRewardsByEvent(id)
        console.log(req.params.id);
        console.log(rewards)
        res.json(rewards)
    } catch (err) {
        next(err);
    }
});

// Winners Routing

router.get("/:id/winners", async (req, res, next) => {
    try {
        const id = req.params.id
        const winners = await winners.findWinnersByEvent(id)
        console.log(req.params.id);
        console.log(winners)
        res.json(winners)
    } catch (err) {
        next(err);
    }
});

module.exports = router;

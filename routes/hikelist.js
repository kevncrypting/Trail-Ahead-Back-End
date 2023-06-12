const express = require("express");
const router = express.Router();
const HikeList = require("../models/HikeList");

// GET a list of all entries in hikelist
router.get("/", function (req, res, next) {
    HikeList.fetchAll()
        .then((hikelist) => res.json(hikelist))
        .catch((err) => next(err));
});

// POST (create) a new hike
router.post("/", function (req, res, next) {
    const {
        userId,
        hikeId
    } = req.body;

    new HikeList({
        userId,
        hikeId
    })
        .save()
        .then((hikelist) => res.json(hikelist))
        .catch((err) => next(err));
});

// PUT (update) a specific hikelist by its ID
router.put("/:id", function (req, res, next) {
    const { id } = req.params;
    const {
        userId,
        hikeId
    } = req.body;

    HikeList.where({ id })
        .fetch()
        .then((hikelist) => {
            return hikelist.save({
                userId,
                hikeId
            });
        })
        .then((updatedHikelist) => res.json(updatedHikelist))
        .catch((err) => next(err));
});

// DELETE a specific hikelist by its ID
router.delete("/:id", function (req, res, next) {
    const { id } = req.params;

    HikeList.where({ id })
        .destroy()
        .then((hikelist) => res.json(hikelist))
        .catch((err) => next(err));
});


module.exports = router;

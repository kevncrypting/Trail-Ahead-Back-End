const express = require("express");
const router = express.Router();
const Hike = require("../models/Hike");

// GET a list of all hikes
router.get("/", function (req, res, next) {
    Hike.fetchAll()
        .then((hikes) => res.json(hikes))
        .catch((err) => next(err));
});

// GET a specific hike by ID, including related users
router.get("/:id", function (req, res, next) {
    const { id } = req.params;

    Hike.where({ id })
        .fetch({ withRelated: ['users'] })
        .then((hike) => res.json(hike))
        .catch((err) => next(err));
});

// POST (create) a new hike
router.post("/", function (req, res, next) {
    const {
        hikePlanner,
        trailName,
        trailThumbnail,
        trailCover,
        timeDate,
        currentGroupSize,
        maxGroupSize,
        about,
        expectations,
    } = req.body;

    new Hike({
        hikePlanner,
        trailName,
        trailThumbnail,
        trailCover,
        timeDate,
        currentGroupSize,
        maxGroupSize,
        about,
        expectations,
    })
        .save()
        .then((hike) => res.json(hike))
        .catch((err) => next(err));
});

// PUT (update) a specific hike by its ID
router.put("/:id", function (req, res, next) {
    const { id } = req.params;
    const {
        hikePlanner,
        trailName,
        trailThumbnail,
        trailCover,
        timeDate,
        currentGroupSize,
        maxGroupSize,
        about,
        expectations,
    } = req.body;

    Hike.where({ id })
        .fetch()
        .then((hike) => {
            return hike.save({
                hikePlanner,
                trailName,
                trailThumbnail,
                trailCover,
                timeDate,
                currentGroupSize,
                maxGroupSize,
                about,
                expectations,
            });
        })
        .then((updatedHike) => res.json(updatedHike))
        .catch((err) => next(err));
});

// DELETE a specific hike by its ID
router.delete("/:id", function (req, res, next) {
    const { id } = req.params;

    Hike.where({ id })
        .destroy()
        .then((hike) => res.json(hike))
        .catch((err) => next(err));
});


module.exports = router;

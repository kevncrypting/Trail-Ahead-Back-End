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
router.get("/:id/users", function (req, res, next) {
    const { id } = req.params;

    Hike.where({ id })
        .fetch({ withRelated: ["users"] })
        .then((hike) => res.json(hike))
        .catch((err) => next(err));
});

module.exports = router;

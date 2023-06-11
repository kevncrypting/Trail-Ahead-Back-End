const express = require("express");
const router = express.Router();
const Hike = require("../models/Hike");

// GET a list of all hikes
router.get("/", function (req, res, next) {
    Hike.fetchAll()
        .then((hikes) => res.json(hikes))
        .catch((err) => next(err));
});

// GET a specific hike by ID
router.get("/:id", function (req, res, next) {
    const { id } = req.params;

    Hike.where({ id })
        .fetch()
        .then((hike) => res.json(hike))
        .catch((err) => next(err));
});

// router.post("/", function (req, res, next) {
//     const { name, picture, experience, timeDate, groupSize } = req.body;

//     knex("hikes")
//         .insert({ name, picture, experience, timeDate, groupSize })
//         .returning("*")
//         .then((hike) => req.json(hike))
//         .catch((err) => next(err));
// });

// PUT(update);
// router.put("/:id", function (req, res, next) {
//   const { id } = req.params;
//   const { name, picture, experience, timeDate, groupSize } = req.body;

//   knex("hikes")
//     .update({ name, picture, experience, timeDate, groupSize })
//     .where({ id })
//     .returning("*")
//     .then((hike) => res.json(hike))
//     .catch((err) => next(err));
// });

// router.delete("/:id", function (req, res, next) {
//   const { id } = req.params;

//   knex("hikes")
//     .del()
//     .where({ id })
//     .returning("*")
//     .then((hike) => res.json(hike))
//     .catch((err) => next(err));
// });

module.exports = router;

const express = require("express");
const router = express.Router();
const knex = require("../db");

router.get("/", function (req, res, next) {
  knex("hikes")
    .select("*")
    .then((hikes) => res.json(hikes))
    .catch((err) => next(err));
});

// knex("hikes")
//   .select("*")
//   .where({ id })
//   .first()
//   .then((hike) => res.json(hike))
//   .catch((err) => next(err));

//   Post a new hike

router.post("/", function (req, res, next) {
  const { name, picture, experience, timeDate, groupSize } = req.body;

  knex("hikes")
    .insert({ name, picture, experience, timeDate, groupSize })
    .returning("*")
    .then((hike) => req.json(hike))
    .catch((err) => next(err));
});

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

router.delete("/:id", function (req, res, next) {
  const { id } = req.params;

  knex("hikes")
    .del()
    .where({ id })
    .returning("*")
    .then((hike) => res.json(hike))
    .catch((err) => next(err));
});

module.exports = router;

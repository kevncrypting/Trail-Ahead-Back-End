const express = require("express");
const router = express.Router();
const knex = require("../db");

router.get("/", function (req, res, next) {
    knex("users")
        .select("*")
        .then((users) => res.json(users));
});

module.exports = router;

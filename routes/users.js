const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET a list of all users
router.get("/", function (req, res, next) {
    User.fetchAll()
        .then((users) => res.json(users))
        .catch((err) => next(err));
});

// GET a specific user by ID
router.get("/:id", function (req, res, next) {
    const { id } = req.params;

    User.where({ id })
        .fetch({ withRelated: ["hikes"] })
        .then((hike) => res.json(hike))
        .catch((err) => next(err));
});

// POST (create) a new user is handled by /auth/register route

// PUT (update) a specific user by ID
router.put("/:id", function (req, res, next) {
    const { id } = req.params;
    const {
        firstName,
        lastName,
        email,
        password,
        age,
        gender,
        experience,
        city,
        state,
        zipcode,
        profilePicture,
        profileTagLine,
        twitter,
        pinterest,
        instagram,
        facebook,
    } = req.body;

    User.where({ id })
        .fetch()
        .then((user) => {
            return user.save({
                firstName,
                lastName,
                email,
                password,
                age,
                gender,
                experience,
                city,
                state,
                zipcode,
                profilePicture,
                profileTagLine,
                twitter,
                pinterest,
                instagram,
                facebook,
            });
        })
        .then((updatedUser) => res.json(updatedUser))
        .catch((err) => next(err));
});

// DELETE a specific user by ID
router.delete("/:id", function (req, res, next) {
    const { id } = req.params;

    User.where({ id })
        .destroy()
        .then((user) => res.json(user))
        .catch((err) => next(err));
});

module.exports = router;

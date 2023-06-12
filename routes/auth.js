// imports all required packages and the User model
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const knex = require("../db");

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRETKEYJWT, { expiresIn: "3d" });
};

router.post("/register", async (req, res, next) => {
    // deconstructs the username and password values from the request body
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password) {
        // conditional block that checks to make sure the username and password values are not null/undefined - if one is, then returns the 400 status code and the message below as a json object
        return res
            .status(400)
            .json({ message: "Username and password are both required." });
    }

    if (!firstName || !lastName) {
        // conditional block that checks to make sure the username and password values are not null/undefined - if one is, then returns the 400 status code and the message below as a json object
        return res.status(400).json({
            message:
                "Please enter a first and last name to identify yourself to the community.",
        });
    }

    try {
        // using bcrypt, creates a hashedPassword out of the password value that is the result of 10 salt rounds
        const hashedPassword = bcrypt.hashSync(password, 10);

        // using knex, look into users table and insert new object with following properties, then return user
        const user = await knex("users")
            .insert({ email, password: hashedPassword, firstName, lastName })
            .returning("*");

        // using createToken method defined above, create a token using id property of user
        const token = createToken(user.id);

        // send back 201 status code with email and token if successful
        res.status(201).json({ email, token });
    } catch (err) {
        // if an error is present, the error is sent back with the 500 status code
        res.status(500).send(err);
    }
});

router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // looks for a User in the database where the username matches the username in the body of the request, then fetch that User
        const user = await knex("users").select("*").where({ email }).first();

        if (!user) {
            // if user is null/undefined, return the 401 status code and following error message
            return res
                .status(401)
                .json({ error: "Invalid username or password" });
        }

        // boolean value, asynchronously waits for bcrypt to compare the password in the body of the request with the hashed password attached to the located user
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            // if bcrypt cannot match the password, the variable isPasswordValid is false and this expression evaluates to be true - then returns the 401 status code and the following error message
            return res
                .status(401)
                .json({ error: "Invalid username or password" });
        }

        // using createToken method defined above, create a token using id property of user
        const token = createToken(user.id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

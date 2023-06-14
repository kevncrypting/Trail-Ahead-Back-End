// imports all required packages and the User model
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const validator = require("validator");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const knex = require("../db");

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRETKEYJWT, { expiresIn: "1d" });
};

router.post("/register", async (req, res, next) => {
    // deconstructs the email and password values from the request body
    const { email, password, firstName, lastName } = req.body;

    // conditional checks to make sure all fields are filled, valid, and of appropriate strength (in case of password)
    if (!email || !password) {
        return res
            .status(400)
            .json({ message: "Email and password are both required." });
    }

    if (!firstName || !lastName) {
        return res.status(400).json({
            message: "First and last name are both required.",
        });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({
            message: "Email not valid.",
        });
    }

    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({
            message: "Password not strong enough.",
        });
    }

    // looks to see if email is associated with an existing user
    const exists = await knex("users").select("*").where({ email }).first();

    // if user exists, then returns message saying email is already in use
    if (exists) {
        return res.status(400).json({
            message: "Email already in use.",
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

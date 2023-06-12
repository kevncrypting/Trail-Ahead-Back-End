// imports all required packages and the User model
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");

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

        // await User.create({
        //     email,
        //     password: hashedPassword,
        //     firstName,
        //     lastName,
        // })
        // .save()
        // .then((user) => res.json(user).status(201))
        // .catch((err) => next(err));

        console.log("test try block");

        // const user = await User.forge({
        //     email,
        //     password: hashedPassword,
        //     firstName,
        //     lastName,
        // });

        // console.log(user);

        // user.save().then((user) => {
        //     res.sendStatus(201).json(user);
        // });

        // await User.create({
        //     username,
        //     password: hashedPassword,
        //     firstName,
        //     lastName,
        // });

        // res.sendStatus(201);
    } catch (err) {
        // if an error is present, the error is sent back with the 500 status code
        res.status(500).send(err);
    }
});

router.post("/login", async (req, res, next) => {
    try {
        // looks for a User in the database where the username matches the username in the body of the request, then fetch that User
        const user = await User.where({ username: req.body.username }).fetch();

        if (!user) {
            // if user is null/undefined, return the 401 status code and following error message
            return res
                .status(401)
                .json({ error: "Invalid username or password" });
        }

        // boolean value, asynchronously waits for bcrypt to compare the password in the body of the request with the hashed password attached to the located user
        const isPasswordValid = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPasswordValid) {
            // if bcrypt cannot match the password, the variable isPasswordValid is false and this expression evaluates to be true - then returns the 401 status code and the following error message
            return res
                .status(401)
                .json({ error: "Invalid username or password" });
        }

        // token creation step: JWT has three sections, the header, payload, and signature. IF a user is located, then we reach this step. Using the sign method on the JWT package, we encode the following information
        const token = jwt.sign({ id: user.id }, "your_jwt_secret", {
            expiresIn: "6h",
        });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

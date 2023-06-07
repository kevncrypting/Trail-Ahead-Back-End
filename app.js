const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors"); // imports the cors module
const passport = require("passport"); // imports the passport module, used for auth process
require("./config/passport")(passport);

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors()); // adds cors middleware, lets us set the origin that provides access to our API

app.use("/auth", authRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);

// 404 Not Found handler
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});
  
  // Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('A server error occurred');
});


module.exports = app;

const bookshelf = require("../bookshelf");

const User = bookshelf.model("User", {
    tableName: "users",
    idAttribute: "id",
});

module.exports = User;
const bookshelf = require("../bookshelf");
const User = require("./User");

const Hike = bookshelf.model("Hike", {
    tableName: "hikes",
    idAttribute: "id",
    users() {
        return this.belongsToMany(User, "userId");
    }
});

module.exports = Hike;
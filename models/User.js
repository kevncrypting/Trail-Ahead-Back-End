const bookshelf = require("../bookshelf");
const Hike = require("./Hike");

const User = bookshelf.model("User", {
    tableName: "users",
    idAttribute: "id",
    hikes() {
        return this.belongsToMany(Hike, "hikeId");
    },
});

module.exports = User;
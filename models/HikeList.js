const bookshelf = require("../bookshelf");
const User = require("./User");
const Hike = require("./Hike");

const HikeList = bookshelf.model("HikeList", {
    tableName: "hikelist",
    idAttribute: "id",
    users() {
        return this.hasMany(User, "userId");
    },
    hikes() {
        return this.hasOne(Hike, "hikeId");
    },
});

module.exports = HikeList;

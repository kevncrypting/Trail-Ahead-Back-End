const bookshelf = require("../bookshelf");
const HikeList = require("./HikeList");
const User = require("./User");

const Hike = bookshelf.model("Hike", {
    tableName: "hikes",
    idAttribute: "id",
    users: function () {
        return this.hasMany(HikeList, "hikeId");
    },
});

module.exports = Hike;

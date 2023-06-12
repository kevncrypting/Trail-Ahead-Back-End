const bookshelf = require("../bookshelf");
const Hike = require("./Hike");
const HikeList = require("./HikeList");

const User = bookshelf.model("User", {
    tableName: "users",
    idAttribute: "id",
    hikes: function () {
        return this.hasMany(HikeList, "userId");
    },
});

module.exports = User;

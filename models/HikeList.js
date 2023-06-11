const bookshelf = require("../bookshelf");
const User = require("./User");
const Hike = require("./Hike");

const HikeList = bookshelf.model("HikeList", {
    tableName: "hikelist",
    user: function () {
        return this.belongsTo(User, "userId");
    },
    hike: function () {
        return this.belongsTo(Hike, "hikeId");
    },
});

module.exports = HikeList;

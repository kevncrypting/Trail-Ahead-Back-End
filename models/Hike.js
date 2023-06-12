const bookshelf = require("../bookshelf");
const HikeList = require("./HikeList");
const User = require("./User");

const Hike = bookshelf.model("Hike", {
    tableName: "hikes",
    idAttribute: "id",
    users: function () {
        return this.hasMany("User", "id");
    },
});

module.exports = Hike;

// const bookshelf = require("../bookshelf");
// const HikeList = require("./HikeList");
// const User = require("./User");

// const Hike = bookshelf.model("Hike", {
//     tableName: "hikes",
//     idAttribute: "id",
//     hikelist() {
//         return this.hasMany(HikeList);
//     },
// });

// module.exports = Hike;

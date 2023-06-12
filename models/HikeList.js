const bookshelf = require("../bookshelf");
const User = require("./User");
const Hike = require("./Hike");

const HikeList = bookshelf.model("HikeList", {
    tableName: "users_hikes",
    user: function () {
        return this.belongsTo("User", "id");
    },
    hike: function () {
        return this.belongsTo("Hike", "id");
    },
});

module.exports = HikeList;

// const bookshelf = require("../bookshelf");
// const User = require("./User");
// const Hike = require("./Hike");

// const HikeList = bookshelf.model("HikeList", {
//     tableName: "users_hikes",
//     users() {
//         return this.hasMany(User)
//     }
// });

// module.exports = HikeList;


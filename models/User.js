const bookshelf = require("../bookshelf");
const Hike = require("./Hike");
const HikeList = require("./HikeList");

const User = bookshelf.model("User", {
    tableName: "users",
    idAttribute: "id",
    hikes: function () {
        return this.hasMany("Hike", "id");
    },
});

module.exports = User;




// const bookshelf = require("../bookshelf");
// const Hike = require("./Hike");
// const HikeList = require("./HikeList");

// const User = bookshelf.model("User", {
//     tableName: "users",
//     idAttribute: "id",
//     hikelist() {
//         return this.belongsTo(HikeList);
//     },
// });

// module.exports = User;


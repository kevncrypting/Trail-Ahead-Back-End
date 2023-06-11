/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("users", function (table) {
        table.increments("id").primary();
        table.string("firstName").notNullable();
        table.string("lastName").notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.integer("age");
        table.string("gender");
        table.string("experience");
        table.string("city");
        table.string("state");
        table.integer("zipcode");
        table.string("profilePicture");
        table.string("profileTagLine");
        table.string("twitter");
        table.string("pinterest");
        table.string("instagram");
        table.string("facebook");
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("users");
};

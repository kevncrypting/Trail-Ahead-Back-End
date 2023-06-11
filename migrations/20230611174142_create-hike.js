/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("hikes", function (table) {
        table.increments("id").primary();
        table.integer("hikePlanner").unsigned().notNullable();
        table.string("trailName").notNullable();
        table.string("trailThumbnail");
        table.string("trailCover");
        table.string("timeDate").notNullable();
        table.integer("currentGroupSize").unsigned().notNullable();
        table.integer("maxGroupSize").unsigned().notNullable();
        table.text("about").notNullable();
        table.text("expectations").notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("hikes");
};

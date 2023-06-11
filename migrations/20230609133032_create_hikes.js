/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("hikes", function (table) {
        table.increments("id").primary();
        table.integer("hikePlanner").notNullable();
        table.string("trailName").notNullable();
        table.string("trailThumbnail");
        table.string("trailCover");
        table.string("timeDate").notNullable();
        table.integer("currentGroupSize").notNullable();
        table.integer("maxGroupSize").notNullable();
        table.string("about").notNullable();
        table.string("expectations").notNullable();

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

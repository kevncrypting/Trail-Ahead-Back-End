/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("hikelist", function (table) {
        table.increments("id").primary();
        table.integer("userId").unsigned().notNullable();
        table.integer("hikeId").unsigned().notNullable();
        table.timestamps(true, true);

        table.foreign("userId").references("id").inTable("users");
        table.foreign("hikeId").references("id").inTable("hikes");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("hikelist");
};
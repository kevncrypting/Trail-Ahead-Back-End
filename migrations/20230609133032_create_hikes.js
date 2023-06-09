/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("hikes", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("picture").notNullable();
    table.integer("experience").notNullable();
    table.string("timeDate").notNullable();
    table.integer("groupSize").notNullable();
    
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable("hikes");

};

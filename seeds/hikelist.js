/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('hikelist').del()
  await knex('hikelist').insert([
    {userId: 1, hikeId: 'rowValue1'},
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
  ]);
};

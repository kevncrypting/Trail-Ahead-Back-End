/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("users_hikes").del();
    await knex("users_hikes").insert([
        { userId: 1, hikeId: 1 },
        { userId: 3, hikeId: 2 },
        { userId: 5, hikeId: 3 },
        { userId: 2, hikeId: 4 },
        { userId: 4, hikeId: 5 },
        { userId: 2, hikeId: 6 },
        { userId: 1, hikeId: 2 },
        { userId: 5, hikeId: 3 },
        { userId: 4, hikeId: 3 },
        { userId: 3, hikeId: 4 },
        { userId: 1, hikeId: 6 },
        { userId: 3, hikeId: 6 },
        { userId: 4, hikeId: 6 },
    ]);
};

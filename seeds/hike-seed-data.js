/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("hikes").del();
  await knex("hikes").insert([
    {
      name: "John Doe",
      picture: "",
      experience: 3,
      timeDate: "",
      groupSize: 5,
    },
    {
      name: "Paula Dean",
      picture: "",
      experience: 5,
      timeDate: "",
      groupSize: 3,
    },
    {
      name: "Johnny Bravo",
      picture: "",
      experience: 2,
      timeDate: "",
      groupSize: 7,
    },
    {
      name: "Kimmy Kim",
      picture: "",
      experience: 2,
      timeDate: "",
      groupSize: 8,
    },
  ]);
};


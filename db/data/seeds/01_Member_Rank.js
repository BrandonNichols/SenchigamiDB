/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Member_Rank").del();
  await knex("Member_Rank").insert([
    { id: 1, rank_type: "Staff" },
    { id: 2, rank_type: "Senchigami Royal" },
    { id: 3, rank_type: "Senchigami Team Member" },
    { id: 4, rank_type: "Valorant Team Captain" },
    { id: 5, rank_type: "VIP" },
    { id: 6, rank_type: "Discord Server Manager" },
    { id: 7, rank_type: "Community Developer" },
    { id: 8, rank_type: "Management Council" }
  ]);
};

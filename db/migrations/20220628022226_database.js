/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("Member_Rank", (table) => {
      table.increments("id");
      table.string("rank_type").unique().notNullable();
    })
    .createTable("Socials", (table) => {
      table.increments("id");
      table.string("facebook");
      table.string("twitter");
      table.string("twitch");
      table.string("instagram");
      table.string("youtube");
      table.string("tiktok");
    })
    .createTable("Members", (table) => {
      table.increments("id");
      table.string("name").unique().notNullable();
      table.string("base64_image");
      table
        .integer("social_list")
        .references("id")
        .inTable("Socials")
        .notNullable()
        .onDelete("CASCADE");
      table
        .integer("rank")
        .references("id")
        .inTable("Member_Rank")
        .notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("Members")
    .dropTableIfExists("Socials")
    .dropTableIfExists("Member_Rank");
};

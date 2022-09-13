/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const testImage = require("../test-asset/testImage");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Members").del();
  await knex("Members").insert([
    { id: 1, name: "Eyeshtick", base64_image: null, social_list: 1, rank: 1 },
    { id: 2, name: "Delicate", base64_image: null, social_list: 2, rank: 2 },
    { id: 3, name: "Kaikaimo", base64_image: null, social_list: 3, rank: 3 },
    { id: 4, name: "Veluxe", base64_image: null, social_list: 4, rank: 2 },
    { id: 5, name: "Meticlion", base64_image: null, social_list: 5, rank: 4 },
    { id: 6, name: "Pixzeles", base64_image: null, social_list: 6, rank: 2 },
    { id: 7, name: "Aereio", base64_image: null, social_list: 7, rank: 2 },
    { id: 8, name: "Eeveexkaela", base64_image: null, social_list: 8, rank: 2 },
    { id: 9, name: "Licheeli", base64_image: null, social_list: 9, rank: 2 },
    { id: 10, name: "Gabbmew", base64_image: null, social_list: 10, rank: 2 },
    { id: 11, name: "Virdi", base64_image: null, social_list: 11, rank: 3 },
    {
      id: 12,
      name: "Sailor Shen",
      base64_image: null,
      social_list: 12,
      rank: 5
    },
    {
      id: 13,
      name: "Stygian Trickster",
      base64_image: null,
      social_list: 13,
      rank: 5
    },
    { id: 14, name: "Noller", base64_image: null, social_list: 14, rank: 6 },
    { id: 15, name: "Jackson", base64_image: null, social_list: 15, rank: 1 },
    { id: 16, name: "Austin", base64_image: null, social_list: 16, rank: 7 },
    { id: 17, name: "LJ", base64_image: null, social_list: 17, rank: 5 },
    { id: 18, name: "Selena", base64_image: null, social_list: 18, rank: 5 },
    { id: 19, name: "Bailey R.", base64_image: null, social_list: 19, rank: 5 },
    {
      id: 20,
      name: "Envoilum",
      base64_image: testImage,
      social_list: 20,
      rank: 8
    },
    { id: 21, name: "Hylishia", base64_image: null, social_list: 21, rank: 8 },
    { id: 22, name: "Clovis", base64_image: null, social_list: 22, rank: 8 }
  ]);
};

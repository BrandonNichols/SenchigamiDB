/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Socials").del();
  await knex("Socials").insert([
    {
      id: 1,
      facebook: null,
      twitter: null,
      twitch: null,
      instagram: null,
      youtube: null,
      tiktok: null
    },
    {
      id: 2,
      facebook: null,
      twitter: "https://twitter.com/delicatexoxo",
      twitch: "https://www.twitch.tv/delicate/",
      instagram: "https://www.instagram.com/delicatexoxo/",
      youtube: "https://www.youtube.com/delicatexo",
      tiktok: "https://www.tiktok.com/@delicatexo/"
    },
    {
      id: 3,
      facebook: null,
      twitter: "https://twitter.com/kyliemorgs",
      twitch: "https://www.twitch.tv/kaikaimogames",
      instagram: "https://www.instagram.com/kylie.stewart/",
      youtube: null,
      tiktok: null
    },
    {
      id: 4,
      facebook: null,
      twitter: "https://twitter.com/veluxe_gg",
      twitch: "https://www.twitch.tv/veluxe_gg",
      instagram: "https://www.instagram.com/veluxe/",
      youtube: null,
      tiktok: "https://www.tiktok.com/@veluxe_"
    },
    {
      id: 5,
      facebook: null,
      twitter: "https://twitter.com/Meticlion",
      twitch: "https://www.twitch.tv/meticlion",
      instagram: null,
      youtube: null,
      tiktok: null
    },
    {
      id: 6,
      facebook: null,
      twitter: "https://twitter.com/LixiaTTV",
      twitch: "https://www.twitch.tv/pixzelesart",
      instagram: "https://www.instagram.com/pixzeles/",
      youtube: null,
      tiktok: "https://www.tiktok.com/@pixzeles?lang=en"
    },
    {
      id: 7,
      facebook: null,
      twitter: "https://twitter.com/aereio_/",
      twitch: "https://www.twitch.tv/aereio_",
      instagram: "https://www.instagram.com/aereio/",
      youtube: null,
      tiktok: "https://www.tiktok.com/@aereio"
    },
    {
      id: 8,
      facebook: null,
      twitter: "https://twitter.com/eeveexkaela",
      twitch: "https://www.twitch.tv/eeveexkaela",
      instagram: "https://www.instagram.com/evexkae/",
      youtube: null,
      tiktok: null
    },
    {
      id: 9,
      facebook: null,
      twitter: "https://twitter.com/li_lichee",
      twitch: "https://www.twitch.tv/licheeli",
      instagram: null,
      youtube: null,
      tiktok: "https://www.tiktok.com/@lichee_li"
    },
    {
      id: 10,
      facebook: null,
      twitter: "https://twitter.com/gabbmew",
      twitch: null,
      instagram: "https://www.instagram.com/gabbmew/",
      youtube: "https://www.youtube.com/c/gabbmew",
      tiktok: null
    },
    {
      id: 11,
      facebook: null,
      twitter: "https://twitter.com/Virdison",
      twitch: "https://www.twitch.tv/virdison",
      instagram: null,
      youtube: null,
      tiktok: null
    },
    {
      id: 12,
      facebook: null,
      twitter: null,
      twitch: null,
      instagram: null,
      youtube: null,
      tiktok: null
    },
    {
      id: 13,
      facebook: null,
      twitter: null,
      twitch: null,
      instagram: null,
      youtube: null,
      tiktok: null
    },
    {
      id: 14,
      facebook: null,
      twitter: null,
      twitch: "https://www.twitch.tv/nollerreal",
      instagram: "https://www.instagram.com/nic.nol/",
      youtube: null,
      tiktok: null
    },
    {
      id: 15,
      facebook: null,
      twitter: "https://twitter.com/JacksonHaime",
      twitch: null,
      instagram: null,
      youtube: null,
      tiktok: null
    },
    {
      id: 16,
      facebook: null,
      twitter: null,
      twitch: null,
      instagram: "https://www.instagram.com/austin_kopriva/",
      youtube: null,
      tiktok: null
    },
    {
      id: 17,
      facebook: null,
      twitter: null,
      twitch: null,
      instagram: "https://www.instagram.com/ljeeezyy/",
      youtube: null,
      tiktok: null
    },
    {
      id: 18,
      facebook: null,
      twitter: null,
      twitch: null,
      instagram: "https://www.instagram.com/suh_its_selena/",
      youtube: null,
      tiktok: null
    },
    {
      id: 19,
      facebook: null,
      twitter: null,
      twitch: null,
      instagram: "https://www.instagram.com/bails_robinson/",
      youtube: null,
      tiktok: null
    },
    {
      id: 20,
      facebook: null,
      twitter: "https://twitter.com/Envoilum",
      twitch: null,
      instagram: null,
      youtube: null,
      tiktok: null
    },
    {
      id: 21,
      facebook: null,
      twitter: "https://twitter.com/hyrjar",
      twitch: null,
      instagram: null,
      youtube: null,
      tiktok: null
    },
    {
      id: 22,
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      twitch: "https://www.twitch.tv/",
      instagram: "https://www.instagram.com/",
      youtube: "https://www.youtube.com/",
      tiktok: "https://www.tiktok.com/"
    }
  ]);
};

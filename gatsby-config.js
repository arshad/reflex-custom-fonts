require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "Reflex",
    description: "Starter for Reflex.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Rounded"],
          urls: ["fonts/fonts.css"],
        },
      },
    },
  ],
};

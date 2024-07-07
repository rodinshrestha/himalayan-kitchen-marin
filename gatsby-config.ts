// import settings from "content/settings/settings.json";
import type { GatsbyConfig } from "gatsby";
const path = require("path");
const { title_logo = "" } = require("./content/settings/settings.json");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Kitchen`,
    siteUrl: `${process.env.GATSBY_DOMAIN_NAME || "https://www.abc.com"}`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  trailingSlash: "ignore",
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-netlify-cms",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    //Setting up absoulte path
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": path.join(__dirname, "src"),
        "#": path.join(__dirname, "/"),
        // prettier-ignore
        "content": path.join(__dirname, "content"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "kitchen menu",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/uploads`, // Adjust the path to where your Netlify CMS uploads images
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {},
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `./public${title_logo || "./src/assets/images/yak-yeti-logo-xs.png"}`,
      },
    },
  ],
};

export default config;

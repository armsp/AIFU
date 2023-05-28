/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    // pathPrefix: "/aifu",
    siteMetadata: {
      title: `AIFU`,
      siteUrl: `https://aifu.shantam.io`
    },
    plugins: [{
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    // {
    //   resolve: 'gatsby-plugin-page-creator',
    //   options: {
    //     "name" : "countries",
    //     "path": "./src/countries",
    //   },
    // }
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'countries',
        path: './src/countries',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icons/brass-eye.svg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  
  ]
  };
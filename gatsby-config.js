module.exports = {
  siteMetadata: {
    name: `Alex J. Gustafson`,
    title: `Blazingly Fast Freedom`,
    date: `March 2, 2019`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
  ],
};

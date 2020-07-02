module.exports = {
  siteMetadata: {
    title: `DomainDaily`,
    description: `DomainDaily is used by 1,000,000+ professionals and chosen by the smartest companies to appraise, sell and buy domains.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
}

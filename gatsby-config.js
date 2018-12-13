const path = require(`path`)
module.exports = {
  siteMetadata: {
      title: 'Wordpress Gatsby',
      subtitle: `Fetch Data From Local WP Install`,
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`,
      {
          resolve: "gatsby-source-wordpress",
          options: {
              baseUrl: "localhost/wp/wp_solitaire",
              protocol: "http",
              hostingWPCOM: false,
              useACF: false,
              verboseOutput: false
          }
      }, 
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.join(__dirname, `src`, `images`),
         }  
        },
       
      
  ],
};
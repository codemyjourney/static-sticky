# Static Website Study Association Sticky
Study Association Sticky's website is a static website built in React with GatsbyJS. It uses contentful as a CMS. `markdown to jsx` is used for converting incoming markdown from contenful to jsx, which allows for dynamic inserting of components via contentful through markdown (pretty neat, right?). `styled-components` is used for CSS-in-JS styling of components. 

## Installation
1. Install Node Version Manager [nvm](https://github.com/creationix/nvm). 
   
2. Install the required version of nodejs by running `nvm install` in the project directory. 
   
3. Install gatsby-cli globally on your system by running `npm i -g gatsby-cli`.
   
4. Install dependencies by running `npm i` in the project directory.
   
5. Create .env file: `cp sample.env .env`.
   
6. Fill .env with the required api keys without quotes from [contentful](https://app.contentful.com/) ( Space Settings > API keys ).

## Development
Pretty simple, just run `gatsby develop` to start a shiny development server with hot reloading.

## Deployment
Also pretty simple, run `gatsby build` and copy the files to a server. 

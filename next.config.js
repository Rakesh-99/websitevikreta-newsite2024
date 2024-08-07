
const path = require('path');
const nextConfig = {
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
   images: {
      domains: ['cdn.sanity.io', 'lcw.nyc3.cdn.digitaloceanspaces.com']
   }
}

module.exports = nextConfig

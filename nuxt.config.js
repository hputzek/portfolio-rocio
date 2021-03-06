let webpack = require('webpack')
let path = require('path')
module.exports = {
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/projekte/*',
        component: resolve(__dirname, 'pages/projekte.vue'),
        name: 'catch all routes created by slider on projects page'
      })
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Load Plugins
  */
  plugins: [
    '~plugins/swiper-plugin.js'
  ],
  css: [
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    loaders: [{
      test: /\.(jpe?g|png)$/,
      loader: 'responsive-loader',
      options: {
        // If you want to enable sharp support:
        // adapter: require('responsive-loader/sharp')
      }
    }
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.plugins.push(new webpack.LoaderOptionsPlugin({
        // test: /\.xxx$/, // may apply this only for some modules
        options: {
          responsiveLoader: {
            sizes: [300, 600, 1200, 2000],
            placeholder: true,
            placeholderSize: 50
          }
        }
      }))
    }
  }
}

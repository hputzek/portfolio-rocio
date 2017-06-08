module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Load Plugins
  */
  plugins: [
    '~plugins/swiper-plugin.js'
  ],
  css: [
    'swiper/dist/css/swiper.css'
  ],
  // responsiveLoader: {
  //   sizes: [300, 600, 1200, 2000],
  //   placeholder: true,
  //   placeholderSize: 50
  // },
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {}
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
    }
  }
}

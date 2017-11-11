
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'General Store GS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/GS_logo.ico' }
    ]
  },
  modules: [
    '@nuxtjs/bootstrap-vue',
    'vue2-datatable'
  ],
  css: [
    // SCSS file in the project
    '@/css/Core-Ui/style.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  generate: {
    routes: [
      '/',
      '/inventario/items',
      '/inventario/bodegas'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

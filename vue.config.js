const path = require('path');
const config = require('./frontend/src/config');
const envPath = './.env' + (config.buildMode !== 'development' && config.buildMode !== undefined ? '.' + process.env.NODE_ENV : '');
require('dotenv-expand')(require('dotenv').config({path: envPath}));

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pages: {
    admin: {
      // entry
      entry: resolve('frontend/src/admin.js'),
      // the source template
      template: resolve('frontend/public/admin.html'),
      // output as laravel blade view
      filename: resolve('resources/views/admin.blade.php')
    },
    // an admin subpage
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `admin.html`.
    website: {
      // entry
      entry: resolve('frontend/src/website.js'),
      // the source template
      template: resolve('frontend/public/website.html'),
      // output as laravel blade view
      filename: resolve('resources/views/index.blade.php')
    }
  },
  /*publicPath: process.env.NODE_ENV === 'production'
    ? '/webapp/'
    : '/',*/
  publicPath: '/webapp/',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    devtool: '#source-map',
    name: config.appName,
    resolve: {
      alias: {
        '@': resolve('frontend/src'),
        '~': resolve('frontend/public'),
      },
    },
  },
  devServer: {
    proxy: config.appUrl
  },
  chainWebpack: config => {
    config.entry('admin').add(resolve('frontend/src/admin/styles/custom.scss')).end();
    config.entry('website').add(resolve('frontend/src/website/styles/custom.scss')).end();
    config.plugin('copy').tap(options => {
      options[0][0].from = resolve('frontend/public');
      options[0][0].ignore.push(...['admin.html', 'website.html'])
      return options
    });
    //override from node_modules/vue-cli-plugin-vuetify/util/helpers.js

    /*['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(match => {
      for (let i = 0; i < 2; i++) {
        const boolean = Boolean(i)
        const rule = boolean ? 'sass' : 'scss'
        config.module.rule(rule).oneOf(match).use('sass-loader').tap(opt => {
          let end = boolean ? "" : ";"
          opt.prependData = `
          @import "@/styles/variables.scss"${end}
          @import "@/website/styles/variables.scss"${end}
          `;
          return opt
        })
      }
    })*/
  },
  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: './public/webapp',

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  /*indexPath: process.env.NODE_ENV === 'production'
    ? '../../resources/views/index.blade.php'
    : 'index.html'*/
  //indexPath: 'resources/views/index.blade.php',
  lintOnSave: config.buildMode !== 'production',
  pwa: {
    iconPaths: {
      favicon32: './img/icons/vuetify.svg',
      favicon16: './img/icons/vuetify.svg',
    }
  },
};

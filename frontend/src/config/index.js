const packageInfo = require('../../../package.json');
const constants = require('./constants');
const settings = require('./settings');
const localStorageSync = require('./localStorageSync');
const auth = require('./auth');

const appName = process.env.VUE_APP_APP_NAME || '';
module.exports = {
  appName: appName,
  appUrl: process.env.VUE_APP_APP_URL,
  baseUrl: process.env.BASE_URL,
  buildMode: process.env.NODE_ENV,
  /**
   * @type {String} '0.0.1'
   * @description Application version.
   * After the release of the new version, it is reset to the default settings.
   */
  version: packageInfo.version ? packageInfo.version : '1.5.0',

  /**
   * @type {String} 'localStorage' | 'sessionStorage'
   * @description Storage for user settings and sessions.
   */
  storage: 'localStorage',

  /**
   * @type {String} 'vva_'
   * @description Key prefix for data in storage.
   */
  prefix: appName.toLowerCase() + '_',

  /**
   * @type {Number} 604800
   * @description User session storage time in seconds.
   * Default 7 days
   */
  ttl: /* 7 * 24 * 60 * */ 604800,

  /**
   * @type {Object}
   * @description Default application settings.
   */
  settings: settings,

  /**
   * @type {boolean} true | false
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  // errorLog: 'production',
  /**
   * Websanova - VueAuth config
   */
  auth,
  /**
   * List constant used on application
   */
  CONSTANTS: constants,
  /**
   * list module which use storage sync
   */
  listSyncModules: localStorageSync
};

const VueCookies = require('vue-cookies');

module.exports = function () {
  return {
    VueAuth: {
      auth: {
        request: (req, token) => {
          req.headers = req.headers || {}
          req.headers.Authorization = 'Bearer ' + token
          return req
        },
        response: res => {
          let token = res.data ? res.data.access_token : null
          let personalAccessToken = window.localStorage.getItem(window.location.hostname + '_personal_access_token');
          if (!token && personalAccessToken) {
            window.localStorage.removeItem(window.location.hostname + '_personal_access_token');
            VueCookies.set(window.location.hostname + '_personal_access_token', personalAccessToken)
            VueCookies.set(window.location.hostname + '_rememberMe', true)
            VueCookies.remove(window.location.hostname + '_refresh_token');
            return personalAccessToken
          }
          if (token) {
            VueCookies.set(window.location.hostname + '_access_token', res.data.access_token)
            VueCookies.set(window.location.hostname + '_refresh_token', res.data.refresh_token)
            VueCookies.set(window.location.hostname + '_token_type', res.data.token_type)
            VueCookies.set(window.location.hostname + '_expires_in', res.data.expires_in)
            try {
              let _VueApp = null;
              if (window._VueAdminApp) _VueApp = window._VueAdminApp
              if (window._VueWebApp) _VueApp = window._VueWebApp
              if (_VueApp) _VueApp.$auth.options.refreshData.data.refresh_token = res.data.refresh_token
            } catch (e) {
              console.log('Update refresh token fail:', e);
            }
            return token.trim()
          }
        }
      },
      http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
      router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
      rolesVar: 'role.id',
      authRedirect: {name: 'Login'},
      loginData: {
        url: '../oauth/token',
        method: 'POST',
        redirect: {name: 'Dashboard'},
      },
      logoutData: {
        url: '/user/logout',
        method: 'GET',
        redirect: {name: 'Login'},
        makeRequest: true,
      },
      fetchData: {
        url: 'user/info',
        method: 'GET',
        enabled: true
      },
      refreshData: {
        url: '../oauth/token',
        method: 'POST',
        enabled: !window.localStorage.getItem(window.location.hostname + '_personal_access_token') && !VueCookies.isKey(window.location.hostname + '_personal_access_token'),
        interval: 30,
        data: {
          refresh_token: VueCookies.isKey(window.location.hostname + '_refresh_token') ? VueCookies.get(window.location.hostname + '_refresh_token') : 'no-token',
          grant_type: 'refresh_token',
          client_id: process.env.VUE_APP_PUBLIC_CLIENT_ID,
          client_secret: process.env.VUE_APP_PUBLIC_CLIENT_SECRET,
        }
      },
      parseUserData: data => data
    },
    pusher: {
      key: process.env.VUE_APP_PUSHER_APP_KEY,
      cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER,
    },
    passport: {
      client_id: process.env.VUE_APP_PUBLIC_CLIENT_ID,
      client_secret: process.env.VUE_APP_PUBLIC_CLIENT_SECRET,
    }
  }
}

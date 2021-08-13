<template>
  <span></span>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import config from '@/config'
import Echo from "laravel-echo";

export default {
  name: 'SiteNotice',
  data() {
    return {
      toastShowing: 0,
      echo: null
    }
  },
  computed: {
    ...mapGetters({
      notices: 'system/notices',
      serverNotifications: 'serverNotifications',
      authenticatedUser: 'user/authenticatedUser'
    }),
    authenticatedUserId() {
      return this.authenticatedUser ? this.authenticatedUser.id : null
    },
    isEchoConnected() {
      return this.echo && this.echo.connector.pusher.connection.connection !== null
    },
    notifyIcon() {
      return 'mdi-bell'
      //return 'mdi-bell-alert'
    },
    notifyColor() {
      return 'secondary'
    },
    notifyUnreadCount() {
      return this.serverNotifications.length > 0 ? this.serverNotifications.length : ''
    }
  },
  methods: {
    ...mapActions({
      removeNotice: 'system/removeNotice',
      gotServerNotification: 'gotServerNotification'
    }),
    showNotice(notice) {
      let option = {
        className: 'vue-toast-notices',
        duration: 5759 + this.toastShowing * 579,
        action: {
          class: 'action-close-toast v-icon mdi mdi-close',
          onClick: (e, toastObject) => {
            this.toastShowing -= 1
            toastObject.goAway(0)
          }
        },
        onComplete: () => this.toastShowing -= 1
      };
      this.toastShowing += 1
      if (notice.type === config.CONSTANTS.NOTICE_TYPE.SUCCESS) option.type = 'success';
      if (notice.type === config.CONSTANTS.NOTICE_TYPE.ERROR) option.type = 'error';
      if (notice.type === config.CONSTANTS.NOTICE_TYPE.INFO) option.className += ' toast-info';
      if (notice.type === config.CONSTANTS.NOTICE_TYPE.WARNING) option.className += ' toast-warning';
      this.$toasted.show(notice.message, option)
      this.removeNotice(notice)
    },
    registerEcho() {
      this.echo = new Echo({
        ...config.auth().pusher,
        broadcaster: 'pusher',
        forceTLS: true,
        authEndpoint: '/broadcasting/auth',
        auth: {headers: {Authorization: null}}
      })
    },
    connectEcho() {
      if (!this.echo) {
        this.registerEcho()
        this.echo.connector.pusher.connection.bind('connected', (event) => this.bindChannels(event))
        this.echo.connector.pusher.connection.bind('disconnected', () => this.disconnectEcho())
      }
      this.echo.connector.pusher.config.auth.headers.Authorization = 'Bearer ' + this.$auth.token()
      this.echo.connector.pusher.connect()
    },
    disconnectEcho() {
      if (!this.echo) return
      this.echo.disconnect()
    },
    bindChannels() {
      console.log('Echo: Bind channels');
      this.echo.private('App.Entities.User' + '.' + this.authenticatedUserId).notification(data => this.handleNotification(data))
      this.listenEvent('BaseEvent');
      this.listenEvent('App\\Events\\BaseEvent');

    },
    listenEvent(eventName) {
      this.echo.private('App.Entities.User' + '.' + this.authenticatedUserId).listen(eventName, (data) => {
        this.handleEvent(eventName, data)
      })
    },
    handleEvent(eventName, data) {
      this.gotServerNotification({
        icon: 'mdi-message',
        iconClass: 'blue white--text',
        title: 'New Event: ' + eventName,
        subtitle: data,
        fullData: data,
        unread: true
      })
      this.noticeInfo(this.$t('notification.new'))
    },
    handleNotification(notification) {
      this.gotServerNotification({
        icon: 'mdi-message',
        iconClass: 'blue white--text',
        title: notification.data.title ? notification.data.title : notification.data,
        subtitle: notification.created_at,
        fullData: notification,
        unread: true
      })
      this.noticeInfo(this.$t('notification.new'))
    },
    onExplainNotificationsBox() {

    }
  },
  watch: {
    notices: {
      handler(val) {
        while (this.toastShowing < config.settings.maxNoticesDisplay && val.length > 0)
          this.showNotice(val.pop())
      },
      deep: true
    },
    toastShowing: {
      handler() {
        while (this.toastShowing < config.settings.maxNoticesDisplay && this.notices.length > 0)
          this.showNotice(this.notices.pop())
      },
    },
    authenticatedUserId: {
      handler(usrId) {
        if (usrId) return this.connectEcho()
        return this.disconnectEcho()
      },
      deep: true
    },
    isEchoConnected: {
      handler(val) {
        if (val) return console.log('Echo: Connected');
        else return console.log('Echo: Disconnected');
      }
    }
  },
  mounted() {
    if (this.authenticatedUserId && !this.isEchoConnected) this.connectEcho()
  }
}
</script>
<style lang="scss">
.vue-toast-notices {
  white-space: pre-line;

  .action-close-toast {
    text-decoration: none;
    color: #fff;
  }
}

.vue-toast-notices.toasted.toast-warning {
  background: #ffa72d;

}

.vue-toast-notices.toasted.toast-info {
  background: #51b0ff;
}
</style>

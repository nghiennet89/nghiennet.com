<template>
  <v-menu :nudge-bottom="10" offset-y origin="center center" transition="scale-transition">
    <template v-slot:activator="{on}">
      <v-btn v-on="on" icon text @click="onExplainNotificationsBox">
        <v-icon :color="notifyColor">{{ notifyIcon }}</v-icon>
        <span class="notify-unread red--text">{{ notifyUnreadCount }}</span>
      </v-btn>
    </template>
    <v-list class="pa-0" subheader two-line>
      <v-subheader>Notifications</v-subheader>
      <v-divider/>
      <!--<v-divider inset/>-->
      <!--<v-subheader inset>Files</v-subheader>-->
      <v-list-item v-for="(serverNotification, idx) in serverNotifications" :key="idx" @click="1">
        <v-list-item-avatar>
          <v-icon :class="[serverNotification.iconClass]">
            {{ serverNotification.icon }}
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ serverNotification.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ serverNotification.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon ripple>
            <v-icon color="grey lighten-1">
              mdi-information
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider/>
    <v-subheader>Show All</v-subheader>
  </v-menu>
</template>

<script>
import Echo from 'laravel-echo'
import {mapActions, mapGetters} from 'vuex';
import config from '@/config'

export default {
  name: 'AppNotification',
  data: () => ({
    echo: null
  }),
  computed: {
    ...mapGetters({
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
      gotServerNotification: 'gotServerNotification'
    }),
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
};
</script>

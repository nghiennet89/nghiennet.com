<template>
  <v-app-bar :dense="toolbarDense" app>
    <v-app-bar-nav-icon @click.stop="NavbarToggle">
      <v-icon>{{ toggleNavbarIcon }}</v-icon>
    </v-app-bar-nav-icon>
    <breadcrumbs/>
    <v-spacer/>
    <!--<error-log/>-->
    <full-screen/>
    <notification/>
    <localization/>
    <profile/>
  </v-app-bar>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Breadcrumbs from '@/admin/widget/AppBreadcrumbs.vue';
//import ErrorLog from '@/admin/widget/AppErrorLog.vue';
import FullScreen from '@/admin/widget/AppFullScreen.vue';
import Localization from '@/admin/widget/AppLocalization.vue';
import Notification from '@/admin/widget/AppNotification.vue';
import Profile from '@/admin/widget/AppProfile.vue';

export default {
  name: 'TheLayoutToolbar',
  components: {
    Breadcrumbs,
    //ErrorLog,
    FullScreen,
    Localization,
    Notification,
    Profile,
  },
  data: () => ({}),
  computed: {
    ...mapGetters({
      toolbarDense: 'settings/toolbarDense',
      navbarShow: 'settings/navbarShow',
      themeDark: 'settings/themeDark',
    }),
    toggleNavbarIcon() {
      return this.navbarShow ? 'mdi-format-indent-decrease' : 'mdi-format-indent-increase';
    },
  },
  methods: {
    ...mapActions({
      NavbarToggle: 'settings/NavbarToggle'
    }),
  },
};
</script>

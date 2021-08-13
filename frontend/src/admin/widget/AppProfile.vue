<template>
  <v-menu :nudge-bottom="10" offset-y origin="center center" transition="scale-transition">
    <template v-slot:activator="{on}">
      <v-btn v-on="on" icon large text>
        <v-avatar size="36px">
          <img v-if="user.avatar" :src="user.avatar" alt="name">
          <v-icon v-else class="blue--text" x-large>
            mdi-account-circle
          </v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-list class="pa-0">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img v-if="user.avatar" :src="user.avatar" alt="name">
            <v-icon v-else class="blue--text" x-large>
              mdi-account
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user && user.role ? user.role.name : '' }}</v-list-item-subtitle>
          </v-list-item-content>

          <!--<v-list-item-action>-->
          <!--<v-btn-->
          <!--:class="fav ? 'red&#45;&#45;text' : ''"-->
          <!--icon-->
          <!--@click="fav = !fav"-->
          <!--&gt;-->
          <!--<v-icon>mdi-heart</v-icon>-->
          <!--</v-btn>-->
          <!--</v-list-item-action>-->
        </v-list-item>
      </v-list>
      <v-divider/>
      <v-list-item v-for="(item,index) in menuitems" :key="index" :disabled="item.disabled" rel="noopener" ripple="ripple" @click="item.click">
        <v-list-item-action v-if="item.icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'AppProfile',
  data() {
    return {
      menuitems: [
        {
          icon: 'mdi-account',
          title: 'toolbar.profile',
          click: (e) => {
            this.$router.push({name: 'Profile'});
          },
        },
        {
          icon: 'mdi-cog',
          title: 'toolbar.settings',
          click: () => this.toggleSettingsPanel(),
        },
        {
          icon: 'mdi-exit-to-app',
          title: 'toolbar.logout',
          click: () => {
            this.logout();
          },
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$auth.user()
    },
  },
  methods: {
    ...mapActions({
      SettingsPanelToggle: 'settings/SettingsPanelToggle'
    }),
    logout() {
      this.$auth.logout();
    },

    toggleSettingsPanel() {
      this.$vuetify.goTo(0);
      this.SettingsPanelToggle();
    },
  },
};
</script>

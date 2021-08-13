<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="1"
      height="80"
    >
      <base-img
        :src="require('@/website/assets/logo.png')"
        class="mr-3 hidden-xs-only"
        contain
        max-width="52"
        width="100%"
      />

      <div class="app-name light">
        {{ appName }}
      </div>

      <div style="width: 100%; display: flex; justify-content: center;">
        <div>
          <v-tabs class="hidden-sm-and-down" optional>
            <v-tab
              v-for="(name, i) in items"
              :key="i"
              :exact="name === 'Home'"
              :ripple="false"
              :to="{ name }"
              active-class="text--primary"
              class="font-weight-bold"
              min-width="96"
              text
            >
              {{ name }}
            </v-tab>
          </v-tabs>
        </div>
      </div>

      <v-btn href="/admin" target="_blank" color="primary" dense outlined style="margin-right: 1rem;" class="hidden-sm-and-down">
        {{ authenticatedUser ? 'Client Area' : 'Login' }}
      </v-btn>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"/>
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>

<script>
import {appName} from '@/config';
import {mapGetters} from "vuex";

export default {
  name: 'HomeAppBar',

  components: {
    HomeDrawer: () => import('./Drawer'),
  },

  data: () => ({
    appName: appName,
    drawer: null,
    items: [
      'Home',
      'Features',
      'About',
      'Contact',
    ],
  }),
  computed: {
    ...mapGetters({
      authenticatedUser: 'user/authenticatedUser'
    }),
  }
}
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

  .v-tab
    &::before
      display: none
</style>

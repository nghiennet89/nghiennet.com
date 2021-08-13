<template>
  <v-navigation-drawer
    v-bind="$attrs"
    v-on="$listeners"
    bottom
    color="transparent"
    fixed
    height="auto"
    overlay-color="secondary"
    overlay-opacity=".8"
    temporary
  >
    <v-list
      color="white"
      shaped
    >
      <v-list-item
        v-for="name in items"
        :key="name"
        :exact="name === 'Home'"
        :to="{ name }"
        color="primary"
      >
        <v-list-item-content>
          <v-list-item-title v-text="name"/>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="goToAdmin" color="primary">
        <v-list-item-content>
          <v-list-item-title v-text="authenticatedUser ? 'Client Area' : 'Login'"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'HomeDrawer',

  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    ...mapGetters({
      authenticatedUser: 'user/authenticatedUser'
    })
  },
  methods: {
    goToAdmin() {
      window.open('/admin');
    }
  }
}
</script>

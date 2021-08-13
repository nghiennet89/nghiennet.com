<template>
  <v-navigation-drawer :value="navbarShow" app class="menu-box" :class="themeDark ? 'menu-dark' : 'menu-light'" fixed width="275"
                       @input="stateNavbarShow">
    <v-app-bar v-if="navbarLogo" :dense="toolbarDense" class="align-center" style="background: rgba(128,128,128,0.35);">
      <v-toolbar-title style="display: inline-table;">
        <v-avatar size="32px" tile class="px-1">
          <img alt="VVA" src="/webapp/img/icons/vuetify.svg" width="32">
        </v-avatar>
      </v-toolbar-title>
      <v-toolbar-title style="width: 100%">
        <div style="width: 100%; text-align: center;">{{ appName }}</div>
      </v-toolbar-title>
    </v-app-bar>
    <the-layout-drawer-list :dense="navbarDense" :menu="menu" icon-show/>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from 'vuex';
import {appName} from '@/config';
import TheLayoutDrawerList from '@/admin/layout/TheLayoutDrawerList.vue';
import AppMenu from '@/admin/menu'

export default {
  name: 'TheLayoutDrawer',
  components: {
    TheLayoutDrawerList,
  },
  data() {
    return {
      appName: appName
    }
  },
  computed: {
    ...mapGetters({
      navbarDense: 'settings/navbarDense',
      navbarShow: 'settings/navbarShow',
      navbarLogo: 'settings/navbarLogo',
      toolbarDense: 'settings/toolbarDense',
      themeDark: 'settings/themeDark',
      authenticatedUser: 'user/authenticatedUser',
      backgroundImage: 'settings/backgroundImage'
    }),
    menu() {
      return AppMenu.map(m => this.parseRole(m, this.authenticatedUser ? this.authenticatedUser.role_id : null)).filter(m => m !== null);
    }
  },
  methods: {
    stateNavbarShow(state) {
      this.$store.dispatch('settings/NavbarState', {state});
    },
    parseRole(menuItem, role) {
      if (Array.isArray(menuItem.children) && menuItem.children.length > 0) //scan all children and remove null by filter
        menuItem.children = menuItem.children.map(m => this.parseRole(m, role)).filter(m => m !== null);

      if (!menuItem.role) return menuItem //public menu

      if (!Array.isArray(menuItem.role)) menuItem.role = [menuItem.role];
      if (menuItem.role.indexOf(role) < 0) return null;
      return menuItem
    }
  },
};
</script>
<style lang="scss">
.menu-box.v-navigation-drawer, .menu-box > .v-navigation-drawer__content {
  background: transparent;
}

.menu-light .v-navigation-drawer__content {
  background-color: rgba(255, 255, 255, 0.35);
}

.menu-light.v-navigation-drawer--is-mobile .v-navigation-drawer__content {
  background-color: rgba(255, 255, 255, 1);
}

.menu-dark .v-navigation-drawer__content {
  background-color: rgba(0, 0, 0, 0.35);
}

.menu-dark.v-navigation-drawer--is-mobile .v-navigation-drawer__content {
  background-color: rgba(0, 0, 0, 1);
}

</style>

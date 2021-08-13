<template>
  <v-breadcrumbs :items="breadcrumb" class="hidden-sm-and-down" divider="/">
    <template v-slot:item="props">
      <a @click.prevent="handleLink(props.item)"> {{ generateTitle(props.item.title) }} </a>
    </template>
  </v-breadcrumbs>
</template>

<script>
import AppMenu from '@/admin/menu'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'AppBreadcrumbs',
  data: () => ({
    menu: AppMenu
  }),
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  computed: {
    ...mapGetters({
      breadcrumb: 'system/breadcrumb',
      themeDark: 'settings/themeDark',
    })
  },
  methods: {
    ...mapActions({
      setBreadcrumb: 'system/setBreadcrumb'
    }),
    generateTitle(title) {
      const hasKey = this.$te(`${title}`);
      if (hasKey) {
        const translatedTitle = this.$t(`${title}`);
        return translatedTitle;
      }
      return title;
    },
    getBreadcrumb() {
      let arrBreadCrumb = [];
      let findMatchMenuItem = (menuList, menuItemName) => {
        let menuListFiltered = menuList.filter(menuItem => menuItem.name === menuItemName)
        if (menuListFiltered.length) {
          arrBreadCrumb.unshift(menuListFiltered[0])
          return menuListFiltered[0]
        }
        let foundChild = null;
        menuList.filter(m => m.children).forEach(menuItem => {
          let childMenuItem = findMatchMenuItem(menuItem.children, menuItemName)
          if (childMenuItem) {
            arrBreadCrumb.unshift(menuItem)
            return foundChild = childMenuItem
          }
        });
        return foundChild;
      }
      let currentRouteName = this.$router.currentRoute.name;
      findMatchMenuItem(this.menu, currentRouteName)
      this.setBreadcrumb(arrBreadCrumb)
    },
    handleLink(item) {
      let currentRoute = this.$router.currentRoute;
      let redirectLink = item.redirect;
      if (redirectLink === currentRoute.path) return console.log('not redirect to current route');

      if (redirectLink !== undefined && redirectLink !== 'noredirect') {
        let resolveRedirect = this.$router.resolve({path: redirectLink});
        if (resolveRedirect.route.path === redirectLink) return this.$router.push({path: redirectLink});
        return console.log('Route link error:', redirectLink)
      }

      if (item.name === currentRoute.name) return console.log('not redirect to current route');

      let routeName = item && item.name ? item.name : 'Dashboard';
      let resolveLink = this.$router.resolve({name: routeName});
      if (resolveLink.route.name === routeName) return this.$router.push({name: routeName});
      return console.log('routeName error:', routeName);
    },
  },
};
</script>

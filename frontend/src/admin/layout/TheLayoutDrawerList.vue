<template>
  <v-list :dense="dense" class="layout-drawer">
    <div v-for="item in menu" :key="item.name">
      <v-list-item v-if="!hasChildren(item)" :class="item.name === $route.name ? 'v-list-item--active' : ''" ripple="ripple"
                   @click="openRoute(item, $event)" class="px-1">
        <v-list-item-icon class="layout-drawer__icon ma-3">
          <v-icon>{{ getListIcon(item) }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ getListTitle(item) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group v-else :prepend-icon="getListIcon(item)" :value="needExplainMenu(item)">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              {{ getListTitle(item) }}
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <the-layout-drawer-list :dense="dense" :menu="item.children" :iconShow="true"/>
      </v-list-group>
    </div>
  </v-list>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'TheLayoutDrawerList',
  props: {
    dense: Boolean,
    iconShow: Boolean,
    isNest: Boolean,
    menu: {
      type: Array,
      default: () => {
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      breadcrumb: 'system/breadcrumb'
    })
  },
  methods: {
    ...mapActions({}),
    isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path);
    },

    needExplainMenu(menuItem) {
      let breadCrumsName = this.breadcrumb.map(bc => bc.title);
      return breadCrumsName.indexOf(menuItem.title) > -1;
    },
    hasChildren(menuItem) {
      if (menuItem.children === null) return false;
      if (!Array.isArray(menuItem.children)) return false;
      return menuItem.children.length >= 1;

    },
    openRoute(menuItem, $event) {
      if (!$event.target.innerText || $event.target.innerText.trim() !== this.$t(menuItem.title)) return;
      let newRouteName = menuItem.name;
      let currentRouteName = this.$router.currentRoute.name;
      if (!newRouteName || newRouteName === currentRouteName) return;
      this.$router.push({name: newRouteName});
    },
    getListIcon(item) {
      return this.iconShow && item.icon ? item.icon : ' ';
    },
    getListTitle(item) {
      return item ? this.$t(item.title) : '';
    },
  },
};

</script>

<style lang="scss">
.layout-drawer {
  padding-bottom: 0px;
  padding-top: 0px;
}

.v-list-item .v-list-item__title, .v-list-item .v-list-item__subtitle {
  line-height: 1.5;
}

.v-list-group > .v-list-group__header.v-list-item > .v-list-item__icon.v-list-group__header__prepend-icon {
  margin-right: 12px;
}

.v-list-group > .v-list-group__header.v-list-item > .v-list-item__icon.v-list-group__header__append-icon {
  margin-left: 0;
  min-width: 28px;
}

.v-list-group.v-list-group--active.primary--text {
  .v-list-group__header.theme--light {
    color: black;
  }

  .v-list-group__header.theme--dark {
    color: white;
  }

  .v-list-group__items .v-list-item--active {
    font-weight: bold;
  }
}

</style>

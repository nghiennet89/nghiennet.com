<template>
  <v-menu :nudge-bottom="10" offset-y origin="center center" transition="scale-transition">
    <template v-slot:activator="{on}">
      <v-btn v-on="on" icon text>
        <v-icon>
          mdi-translate
        </v-icon>
      </v-btn>
    </template>
    <v-list class="pa-0">
      <v-list-item v-for="(item,index) in locales" :key="index" :target="item.target" rel="noopener" ripple="ripple" @click="setLocale(item.locale)">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {locales} from '@/admin/locale';

export default {
  name: 'AppLocalization',
  data: () => ({
    locales,
  }),
  methods: {
    async setLocale(locale) {
      await this.$store.dispatch('settings/SetLocale', {locale});
    },
  },
};
</script>

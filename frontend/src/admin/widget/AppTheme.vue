<template>
  <v-row dense>
    <v-col v-for="(item, index) in themes" :key="index" :class="['text-center', {'elevation-5 pa-2': themeIndex === index}]" :cols="cols"
           @click.stop="toggleTheme(index)">
      <div v-for="(color, title) in item.light" :key="title" :style="{background: color}" class="white--text">
        {{ title }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
import {mapGetters} from 'vuex';
import themes from '@/admin/plugins/vuetifyThemes';

export default {
  name: 'AppTheme',
  props: {
    cols: {
      type: String,
      default: '6',
    },
  },
  data: () => ({
    themes,
  }),
  computed: {
    ...mapGetters({
      themeIndex: 'settings/themeIndex'
    }),
  },
  methods: {
    toggleTheme(index) {
      this.$store.dispatch('settings/ThemeToggle', {
        index,
        vuetify: this.$vuetify
      });
    },
  },
};
</script>

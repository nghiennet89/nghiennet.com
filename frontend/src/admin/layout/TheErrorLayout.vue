<template>
  <div>
    <v-app-bar class="white">
      <v-toolbar-title>Error</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>
<script>

export default {
  name: 'TheErrorLayout',
  data: () => ({}),
};
</script>

<template>
  <v-container class="container--fluid fill-height">
    <v-row align="center" dense justify="center" no-gutters>
      <v-col class="text-center">
        <slot name="page"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AppCenter',
  data: () => ({}),
};
</script>

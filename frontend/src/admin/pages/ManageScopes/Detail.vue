<template>
  <v-card class="mx-auto pa-5">
    <v-card-title class="mx-0 px-0">Detail Scope</v-card-title>
    <v-row>
      <v-col cols="6">
        <v-card-text>Name: {{ item.name }}</v-card-text>
      </v-col>
      <v-col cols="6">
        <v-card-text>Group: {{ item.group }}</v-card-text>
      </v-col>
      <v-col cols="6">
        <v-card-text>Title: {{ item.title }}</v-card-text>
      </v-col>
    </v-row>
    <v-card-actions class="mx-0 pa-0">
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="onClose">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'DetailScope',
  props: ['selectedItem', 'onClose'],
  data: () => ({
    item: {}
  }),
  mounted() {
    this.item = {...this.selectedItem};
  }
}
</script>

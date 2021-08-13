<template>
  <v-card class="mx-auto pa-5">
    <v-card-title class="mx-0 px-0">Update Scope</v-card-title>
    <v-row>
      <v-col cols="6">
        <v-text-field dense outlined label="Name" v-model="item.name"/>
      </v-col>
      <v-col cols="6">
        <v-text-field dense outlined label="Group" v-model="item.group"/>
      </v-col>
      <v-col cols="6">
        <v-text-field dense outlined label="Title" v-model="item.title"/>
      </v-col>
    </v-row>
    <v-card-actions class="mx-0 pa-0">
      <v-spacer></v-spacer>
      <v-btn color="secondary" text @click="onCancel">Cancel</v-btn>
      <v-btn color="primary" text @click="processUpdate">Update</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'UpdateScope',
  props: ['selectedItem', 'onUpdated', 'onCancel'],
  data: () => ({
    item: {}
  }),
  computed: {
    ...mapGetters({
      roles: 'role/all'
    }),
  },
  methods: {
    ...mapActions({
      updateItem: 'scope/update',
    }),
    processUpdate() {
      this.updateItem(this.item).then(() => {
        this.onUpdated();
      });
    }
  },
  mounted() {
    this.item = {...this.selectedItem};
  }
}
</script>

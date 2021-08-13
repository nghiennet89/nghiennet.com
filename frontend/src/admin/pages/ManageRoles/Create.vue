<template>
  <v-card class="mx-auto pa-5">
    <v-card-title class="mx-0 px-0">Create new role</v-card-title>
    <v-row>
      <v-col cols="12">
        <v-text-field dense outlined label="Name" v-model="newItem.name"/>
      </v-col>
    </v-row>
    <v-card-actions class="mx-0 pa-0">
      <v-spacer></v-spacer>
      <v-btn color="secondary" text @click="onCancel">Cancel</v-btn>
      <v-btn color="primary" text @click="processAdd">Create</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'CreateRole',
  props: ['onCreated', 'onCancel'],
  data: () => ({
    newItem: {}
  }),
  computed: {
    ...mapGetters({
      roles: 'role/all'
    }),
  },
  methods: {
    ...mapActions({
      createItem: 'role/create'
    }),
    processAdd() {
      this.createItem(this.newItem).then(() => {
        this.onCreated();
      });
    }
  },
}
</script>

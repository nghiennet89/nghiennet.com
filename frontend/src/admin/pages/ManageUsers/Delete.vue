<template>
  <v-card>
    <v-card-title>Do you want to delete {{ idsToDelete.length > 1 ? 'these' : 'this' }} user?</v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="secondary" text @click="onCancel">Cancel</v-btn>
      <v-btn color="primary" text @click="processDelete">OK</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  name: 'DeleteUser',
  props: ['idsToDelete', 'onDeleted', 'onCancel'],
  methods: {
    ...mapActions({
      deleteItem: 'user/delete'
    }),
    async processDelete() {
      if (!this.idsToDelete) return this.noticeWarning('Item not found');
      this.deleteItem(this.idsToDelete).then(() => {
        this.onDeleted();
      });
    }
  }
}
</script>

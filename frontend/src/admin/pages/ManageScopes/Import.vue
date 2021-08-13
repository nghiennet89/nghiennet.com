<template>
  <v-card>
    <v-card-title>Import Scopes</v-card-title>
    <v-file-input dense outlined label="File to import" show-size class="mx-4"
                  v-model="importFile"/>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="secondary" text @click="onCancel">Cancel</v-btn>
      <v-btn color="primary" text @click="processImport">Import</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  name: 'ImportScope',
  props: ['onImported', 'onCancel'],
  data: () => ({
    importFile: null
  }),
  methods: {
    ...mapActions({
      importItems: 'scope/import'
    }),
    async processImport() {
      let data = new FormData();
      data.append('import_file', this.importFile);
      this.importItems(data).then(() => {
        this.onImported();
      });
    }
  }
}
</script>

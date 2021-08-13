<template>
  <v-card tile :elevation="0" class="crud-box list-scopes">
    <h1 class="mx-4">Manage Scopes</h1>
    <v-layout wrap class="px-4 pt-4">
      <div style="overflow: visible">
        <v-btn color="success" class="mr-2" @click="onClickNew">
          <v-icon>mdi-plus</v-icon>
          New
        </v-btn>
        <v-btn color="primary" outlined class="mr-2" @click="onClickImport">
          <v-icon>mdi-database-import</v-icon>
          Import
        </v-btn>
        <v-btn color="primary" outlined class="mr-2" @click="onClickExport">
          <v-icon>mdi-database-export</v-icon>
          Export
        </v-btn>
        <v-btn color="error" v-if="pickedItems.length > 0" class="mr-2" @click="onClickDeleteAll">
          <v-icon>mdi-delete</v-icon>
          Delete Items
        </v-btn>
      </div>
      <!---->
      <v-spacer></v-spacer>
      <v-layout wrap style="max-width: calc(100% - 250px);">
        <v-text-field dense outlined @keyup.enter="doSearch" class="mr-2" label="Search Name"
                      v-model="searchFields.name.value"/>
        <v-text-field dense outlined @keyup.enter="doSearch" class="mr-2" label="Search Group"
                      v-model="searchFields.group.value"/>
      </v-layout>
      <v-btn color="primary" @click="doSearch">
        <v-icon>mdi-magnify</v-icon>
        Search
      </v-btn>
    </v-layout>

    <!--card content-->
    <v-card tile :elevation="1" :disabled="tblLoading" outlined class="block-tbl mx-4">
      <v-data-table :headers="tblHeader" :items="listItems" :server-items-length="tblPagination.total" :loading="tblLoading"
                    :footer-props="tblConfig.footerProps" @dblclick:row="onClickRow" :options.sync="tblOptions"
                    :loading-text="tblConfig.text.loading" v-model="pickedItems" :show-select="tblConfig.showSelect">
        <template v-slot:no-data>
          {{ tblConfig.text.noItem }}
        </template>

        <template v-slot:item.no="{item}">
          {{ getIndexOfItem(item) }}
        </template>

        <template v-slot:item.actions="props">
          <v-icon small @click="onClickDetail(props)" class="mr-2">mdi-view-list</v-icon>
          <v-icon small @click="onClickEdit(props)" class="mr-2">mdi-pencil</v-icon>
          <v-icon small @click="onClickDelete(props)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog.create" :width="800">
      <CreateItem :onCreated="onCreated" :onCancel="()=>{dialog.create=false}"></CreateItem>
    </v-dialog>
    <v-dialog v-model="dialog.detail" :width="'60%'">
      <DetailItem :selectedItem="selectedItem" :onClose="()=>{dialog.detail=false}"></DetailItem>
    </v-dialog>
    <v-dialog v-model="dialog.update" :width="800">
      <UpdateItem :onUpdated="onUpdated" :selectedItem="selectedItem" :onCancel="()=>{dialog.update=false}"></UpdateItem>
    </v-dialog>
    <v-dialog v-model="dialog.delete" :width="400">
      <DeleteItem :idsToDelete="idsToDelete" :onDeleted="onDeleted" :onCancel="()=>{dialog.delete=false}"></DeleteItem>
    </v-dialog>
    <v-dialog v-model="dialog.import" :width="400">
      <ImportItem :onImported="onImported" :onCancel="()=>{dialog.import=false}"></ImportItem>
    </v-dialog>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import CreateItem from "./Create";
import DetailItem from "./Detail";
import UpdateItem from "./Update";
import DeleteItem from "./Delete";
import ImportItem from "./Import";
import indexMixin from './indexMixin';

export default {
  name: 'ManageScopes',
  components: {CreateItem, DetailItem, UpdateItem, DeleteItem, ImportItem},
  mixins: [indexMixin],
  data() {
    return {
      searchFields: {
        name: {
          value: '',
          type: 'like',
        },
        group: {
          value: '',
          type: 'like',
        },
      },
      searchWith: '',
      tblHeader: [
        {
          text: 'No',
          value: 'no',
          sortable: false,
          groupable: false,
          width: '55px',
          align: 'start',
        },
        {
          text: 'Name',
          value: 'name',
        },
        {
          text: 'Group',
          value: 'group',
        },
        {
          text: 'Title',
          value: 'title',
        },
        {
          text: 'Created At',
          value: 'created_at',
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false,
          groupable: false,
          width: '111px',
          align: 'center',
        }
      ],
    }
  },
  computed: {
    ...mapGetters({
      items: 'scope/all',
      tblPagination: 'scope/pagination'
    }),
  },
  methods: {
    ...mapActions({
      getListItems: 'scope/get',
      exportListItems: 'scope/export',
    }),
  }
}
</script>

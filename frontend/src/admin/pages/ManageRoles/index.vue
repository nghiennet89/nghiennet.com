<template>
  <v-card tile :elevation="0" class="crud-box list-roles">
    <h1 class="mx-4">Manage Roles</h1>
    <v-layout wrap class="px-4 pt-4">
      <div style="overflow: visible">
        <v-btn color="success" class="mr-2" @click="onClickNew">
          <v-icon>mdi-plus</v-icon>
          New
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
      <v-data-table :headers="tblConfig.header" :items="listItems" :server-items-length="tblPagination.total" :loading="tblLoading"
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
    <v-dialog v-model="dialogCreate" :width="400">
      <CreateItem :onCreated="onCreated" :onCancel="()=>{dialogCreate=false}"></CreateItem>
    </v-dialog>
    <v-dialog v-model="dialogDetail" :width="'60%'">
      <DetailItem :selectedItem="selectedItem" :onClose="()=>{dialogDetail=false}"></DetailItem>
    </v-dialog>
    <v-dialog v-model="dialogUpdate" :width="400">
      <UpdateItem :onUpdated="onUpdated" :selectedItem="selectedItem" :onCancel="()=>{dialogUpdate=false}"></UpdateItem>
    </v-dialog>
    <v-dialog v-model="dialogDelete" :width="400">
      <DeleteItem :idsToDelete="idsToDelete" :onDeleted="onDeleted" :onCancel="()=>{dialogDelete=false}"></DeleteItem>
    </v-dialog>
  </v-card>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import DeleteItem from "./Delete";
import CreateItem from "./Create";
import UpdateItem from "./Update";
import DetailItem from "./Detail";

export default {
  name: 'ManageRoles',
  components: {DeleteItem, CreateItem, UpdateItem, DetailItem},
  data() {
    return {
      pickedItems: [],
      selectedItem: null,
      idsToDelete: [],
      tblLoading: false,
      dialogCreate: false,
      dialogUpdate: false,
      dialogDelete: false,
      dialogDetail: false,
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
      querySilent: true,
      searchWith: 'roleScopes;roleScopes.scope',
      tblConfig: {
        header: [
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
            text: 'Description',
            value: 'description',
          },
          {
            text: 'Scopes',
            value: 'countScopes',
            sortable: false,
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
        footerProps: {
          showFirstLastPage: true,
          'items-per-page-options': [10, 20, 50, 100, -1]
        },
        showSelect: true,
        text: {
          loading: 'Loading ...',
          noItem: 'No item found'
        },
      },
      tblOptions: {}
    }
  },
  computed: {
    ...mapGetters({
      items: 'role/all',
      tblPagination: 'role/pagination'
    }),
    listItems() {
      return this.items.map(i => {
        i.countScopes = i.role_scopes ? i.role_scopes.length : 0;
        return i;
      })
    },
    getIndexOfItem() {
      return item => {
        let pageOffset = this.tblPagination ? (this.tblPagination.current_page - 1) * this.tblPagination.per_page : 0
        return pageOffset + this.items.indexOf(item) + 1
      }
    },
    queryConf() {
      return {
        options: this.tblOptions,
        searchWith: this.searchWith,
        querySilent: this.querySilent
      }
    }
  },
  methods: {
    ...mapActions({
      getListItems: 'role/get',
    }),
    onClickRow($event, row) {
      console.log('$event', $event);
      console.log('row', row);
    },

    onClickNew() {
      this.dialogCreate = true;
    },

    /**
     * open confirm box for delete 1 item
     * @param props
     */
    onClickDelete(props) {
      this.dialogDelete = true;
      this.idsToDelete = [props.item.id];
    },

    onClickEdit(props) {
      this.selectedItem = props.item;
      this.dialogUpdate = true;
    },

    onClickDetail(props) {
      this.selectedItem = props.item;
      this.dialogDetail = true;
    },

    /**
     * open confirm box for delete multi item
     */
    onClickDeleteAll() {
      this.dialogDelete = true;
      this.idsToDelete = this.pickedItems.map(i => i.id);
    },

    /**
     * callback after delete items
     */
    onDeleted() {
      this.dialogDelete = false;
      this.idsToDelete = [];
      this.doSearch();
    },

    onCreated() {
      this.dialogCreate = false;
      this.doSearch();
    },

    onUpdated() {
      this.dialogUpdate = false;
      this.doSearch();
    },

    doSearch() {
      this.pickedItems = [];
      this.selectedItem = null;
      this.tblLoading = true
      this.getListItems({
        ...this.queryConf,
        searchFields: this.searchFields,
      }).finally(() => {
        this.tblLoading = false;
        this.tblOptions.page = 1;
      });
    },
  },
  watch: {
    'queryConf': {
      handler(val) {
        console.log('queryConf:', val);
        this.doSearch();
      },
      deep: true
    },
  }
}
</script>
